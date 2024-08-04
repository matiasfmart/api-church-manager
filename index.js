import express from 'express';
import authRouter from './src/routes/auth.routes.js';
import memberRouter from './src/routes/members.routes.js';
import poolPromise from './src/db/dbConnection.js'; // Importar la conexión

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto', PORT);
});

app.use(express.json());
app.use("/api/v1", authRouter);
app.use("/api/v1", memberRouter); // Añadir la ruta de miembros