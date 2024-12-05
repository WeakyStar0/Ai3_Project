const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const reservationsRoutes = require('./routes/reservations.routes');
const roomsRoutes = require('./routes/rooms.routes');

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/rooms', roomsRoutes);

module.exports = app;
