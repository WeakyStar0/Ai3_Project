const app = require('./app');
const PORT = 3000;
const connectDB = require('./config/database');

connectDB();


app.listen(PORT, () => {
    console.log(`Servidor a funcionar em http://localhost:${PORT}`);
});
