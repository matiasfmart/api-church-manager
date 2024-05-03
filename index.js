import express from 'express';
import authRouter from './src/routes/auth.route.js';
import poolPromise from './src/db/dbConnection.js'; // Importar la conexión

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto', PORT);
});

app.use(express.json());
app.use("/api/v1", authRouter);

// Ejemplo de consulta
(async () => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM member');
    console.log('Resultados de la consulta:', result.recordset);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err);
  }
})();
