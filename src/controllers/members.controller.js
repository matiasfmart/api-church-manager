// src/controllers/member.controller.js
import { fetchAllMembers, fetchCellOptions, fetchAreaOptions } from '../services/members.service.js';

export const getAllMembers = async (req, res) => {
    try {
        const members = await fetchAllMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los miembros' });
    }
};

export const getCellOptions = async (req, res) => {
    try {
        const cellOptions = await fetchCellOptions();
        res.json(cellOptions);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las opciones de celulas' });
    }
};

export const getAreaOptions = async (req, res) => {
    try {
        const cellOptions = await fetchAreaOptions();
        res.json(cellOptions);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las opciones de areas' });
    }
};
