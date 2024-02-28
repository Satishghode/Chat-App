import express from 'express';
import { getMessage, sentMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/sent/:id' , protectRoute, sentMessage);
router.get('/:id' , protectRoute, getMessage ) 

export default router; 