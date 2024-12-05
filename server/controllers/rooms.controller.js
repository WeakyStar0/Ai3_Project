// Simulação de dados
let rooms = [];

exports.listRooms = (req, res) => {
    res.json(rooms);
};

exports.createRoom = (req, res) => {
    const room = req.body;
    rooms.push(room);
    res.status(201).json({ message: 'Room created', room });
};

exports.getRoomById = (req, res) => {
    const { id } = req.params;
    const room = rooms.find(r => r.id === id);
    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
};

exports.updateRoom = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const roomIndex = rooms.findIndex(r => r.id === id);
    if (roomIndex === -1) {
        return res.status(404).json({ message: 'Room not found' });
    }
    rooms[roomIndex] = { ...rooms[roomIndex], ...updatedData };
    res.json({ message: 'Room updated', room: rooms[roomIndex] });
};

exports.deleteRoom = (req, res) => {
    const { id } = req.params;
    rooms = rooms.filter(r => r.id !== id);
    res.json({ message: 'Room deleted' });
};
