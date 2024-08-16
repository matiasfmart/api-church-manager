// src/services/member.service.js
import pool from '../db/dbConnection.js';
import { getAllMembers as getAllMembersQuery, 
        getCellOptions as getCellOptionsQuery,
        getAreaOptions as getAreaOptionsQuery } from '../queries/members.queries.js';

export const fetchAllMembers = async () => {
    try {
        const [rows] = await pool.query(getAllMembersQuery); // Usa pool.query() en lugar de pool.request().query()
        return rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
};

export const fetchCellOptions = async () => {
    try {
        const [rows] = await pool.query(getCellOptionsQuery);
        return rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
};

export const fetchAreaOptions = async () => {
    try {
        const [rows] = await pool.query(getAreaOptionsQuery);
        return rows;
    } catch (error) {
        console.error('Error al ejecutar la consulta:', error);
        throw error;
    }
};