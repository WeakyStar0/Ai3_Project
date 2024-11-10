const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Servidor backend está a funcionar!');
});

app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});