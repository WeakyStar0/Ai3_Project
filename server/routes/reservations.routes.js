const express = require("express");
const router = express.Router();
const reservationsController = require("../controllers/reservations.controller");

router.get("/:reservationId", isAuthenticated, reservationsController.getReservation);
router.get("/", reservationsController.listReservations);

router.post("/", reservationsController.createReservation);

router.put("/:reservationId", reservationsController.updateReservation);

router.delete("/:reservationId", reservationsController.cancelReservation);

module.exports = router; 
