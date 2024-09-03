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

export const executeStoredProcedure = async (procedureName, params = []) => {
    try {
        const placeholders = params.map(() => '?').join(', ');
        const query = `CALL ${procedureName}(${placeholders})`;
        const [rows] = await pool.query(query, params);
        return rows.length > 0 ? rows[0] : rows;
    } catch (error) {
        console.error('Error al ejecutar el procedimiento almacenado:', error);
        throw error;
    }
};
