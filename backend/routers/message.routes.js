import express from 'express';
import { sentMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/sent/:id' , protectRoute, sentMessage); 

export default router; 