import pool from '../db/dbConnection.js';

export const executeQuery = async (query) => {
    try {
        const [rows] = await pool.query(query);
        return rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
};
