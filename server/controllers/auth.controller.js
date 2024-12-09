const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Exemplo de dados fictícios de utilizadores
const users = [
    { id: 1, username: 'admin', password: '$2a$10$EXAMPLEHASH', role: 'admin' },
    { id: 2, username: 'user', password: '$2a$10$EXAMPLEHASH', role: 'user' },
];

// Função para realizar login
exports.login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);
    if (!user) return res.status(404).json({ message: 'Utilizador não encontrado' });

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: 'Credenciais inválidas' });

    const token = jwt.sign({ id: user.id, role: user.role }, 'YOUR_SECRET_KEY', { expiresIn: '1h' });
    res.json({ token });
};

// Middleware para verificar o token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token não fornecido' });

    jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido' });
        req.user = decoded;
        next();
    });
};

// Middleware para verificar o papel do utilizador
exports.checkRole = (role) => (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ message: 'Acesso negado' });
    next();
};
