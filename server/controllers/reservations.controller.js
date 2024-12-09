const { ObjectId } = require("mongodb");
const db = require("../db");

const createReservation = async (req, res) => {
    const { userId, roomId, date } = req.body;

    if (!userId || !roomId || !date) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        const client = db.getClient();
        const newReservation = {
            _id: new ObjectId(),
            userId,
            roomId,
            date,
        };

        const result = await client.db().collection("reservations").insertOne(newReservation);

        res.status(201).json({ message: "Reserva criada com sucesso", result });
    } catch (error) {
        console.error("Erro ao criar reserva:", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
};

module.exports = {
    createReservation,
};
