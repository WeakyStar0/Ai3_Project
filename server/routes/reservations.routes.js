const express = require("express");
const router = express.Router();
const reservationsController = require("../controllers/reservations.controller");

router.get("/", reservationsController.listReservations);
router.post("/", reservationsController.createReservation);
router.get("/:reservationId", reservationsController.getReservation);
router.put("/:reservationId", reservationsController.updateReservation);
router.delete("/:reservationId", reservationsController.cancelReservation);

module.exports = router;
