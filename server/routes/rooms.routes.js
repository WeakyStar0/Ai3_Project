const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.controller');

<<<<<<< HEAD
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
=======
router.get("/:roomId", roomsController.getRoomDetails);
router.get("/", roomsController.listRooms);

router.post("/", roomsController.createRoom);

router.put("/:roomId", roomsController.updateRoom);

router.delete("/:roomId", roomsController.deleteRoom);
>>>>>>> 51df7f500389a281d645e975bc08f3a179a1d985

module.exports = router;
