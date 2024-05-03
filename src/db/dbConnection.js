import 'dotenv/config'; // Cargar variables de entorno desde .env
import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: 'localhost', // Cambia esto por la dirección del servidor de SQL Server si es diferente
  database: 'church-db',
  options: {
    encrypt: true, // Si estás utilizando Azure SQL, asegúrate de establecer esto en true
    enableArithAbort: true // Esto es importante para evitar errores de tiempo de ejecución en SQL Server
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Conexión exitosa a la base de datos SQL Server');
    return pool;
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1); // Salir del proceso si hay un error de conexión
  });

export default poolPromise;



// Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;