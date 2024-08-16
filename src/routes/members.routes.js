// src/routes/member.route.js
import express from 'express';
import { getAllMembers, getCellOptions, getAreaOptions } from '../controllers/members.controller.js';

const router = express.Router();

router.get('/members', getAllMembers);
router.get('/members/cell-options', getCellOptions);
router.get('/members/area-options', getAreaOptions);

export default router;