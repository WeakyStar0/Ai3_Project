const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Rota de login
router.post('/login', authController.login);

// Exemplo de rota protegida
router.get('/protected', authController.verifyToken, authController.checkRole('admin'), (req, res) => {
    res.json({ message: 'Acesso autorizado para administradores!' });
});

module.exports = router;
