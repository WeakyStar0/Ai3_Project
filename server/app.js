const express = require("express");
const app = express();

// middlewares
app.use(express.json());

// rotas
const authRoutes = require("./routes/auth.routes");
const reservationsRoutes = require("./routes/reservations.routes");
const roomsRoutes = require("./routes/rooms.routes");

app.use("/auth", authRoutes);
app.use("/reservations", reservationsRoutes);
app.use("/rooms", roomsRoutes);

module.exports = app;
