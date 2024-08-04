// src/controllers/member.controller.js
import { fetchAllMembers } from '../services/members.service.js';

export const getAllMembers = async (req, res) => {
    try {
        const members = await fetchAllMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los miembros' });
    }
};
