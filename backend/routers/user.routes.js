import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersFormSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsersFormSidebar );

export default router ; 