const express = require("express");
const router = express.Router();
const roomsController = require("../controllers/rooms.controller");

router.get("/:roomId", roomsController.getRoomDetails);
router.get("/", roomsController.listRooms);

router.post("/", roomsController.createRoom);

router.put("/:roomId", roomsController.updateRoom);

router.delete("/:roomId", roomsController.deleteRoom);

module.exports = router;
