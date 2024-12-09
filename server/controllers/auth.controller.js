const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Exemplo de dados fictícios de utilizadores
const users = [
    { id: 1, username: 'admin', password: '$2a$10$EXAMPLEHASH', role: 'admin' },
    { id: 2, username: 'user', password: '$2a$10$EXAMPLEHASH', role: 'user' },
];


exports.registerUser = async (req, res) => {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            _id: new ObjectId(),
            username,
            password: hashedPassword,
            role,
        };

        const client = db.getClient();
        const result = await client.db().collection("users").insertOne(newUser);

        res.status(201).json({ message: "Utilizador registado com sucesso", result });
    } catch (error) {
        console.error("Erro ao registar utilizador:", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
};


// Função para realizar login
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        const client = db.getClient();
        const user = await client.db().collection("users").findOne({ username });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            "secreta_super_segura",
            { expiresIn: "1h" }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
};

// verificar o token
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token não fornecido' });

    jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Token inválido' });
        req.user = decoded;
        next();
    });
};

// verificar o papel do utilizador
exports.checkRole = (role) => (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ message: 'Acesso negado' });
    next();
};
