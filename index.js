import express from 'express';
import cors from 'cors';
import authRouter from './src/routes/auth.routes.js';
import membersRouter from './src/routes/members.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto', PORT);
});

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use("/api/v1", authRouter);
app.use("/api/v1", membersRouter); // Añadir la ruta de miembros