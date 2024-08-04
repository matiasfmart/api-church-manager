import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

// Configuración de la conexión a MySQL
const config = {
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

// Crear un pool de conexiones
const poolPromise = mysql.createPool(config);

poolPromise.getConnection()
  .then(connection => {
    console.log('Conexión a MySQL establecida');
    connection.release(); // Libera la conexión de vuelta al pool
  })
  .catch(err => {
    console.error('Error al conectar a MySQL:', err);
    throw err;
  });

export default poolPromise;