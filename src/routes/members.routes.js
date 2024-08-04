// src/routes/member.route.js
import express from 'express';
import { getAllMembers } from '../controllers/members.controller.js';

const router = express.Router();

router.get('/members', getAllMembers);

export default router;