const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.controller');

// GET: Listar todos os quartos
router.get('/', roomsController.listRooms);

// POST: Criar um novo quarto
router.post('/', roomsController.createRoom);

// GET: Buscar quarto por ID
router.get('/:id', roomsController.getRoomById);

// PUT: Atualizar quarto
router.put('/:id', roomsController.updateRoom);

// DELETE: Remover quarto
router.delete('/:id', roomsController.deleteRoom);

module.exports = router;
