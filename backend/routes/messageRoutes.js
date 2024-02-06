import express from 'express';
import { getMessages, sendMessage } from '../controllers/messageCtrl.js';
import { protect } from '../middleware/protect.js';
const router = express.Router();

router.get('/:id', protect, getMessages);
router.post('/send/:id', protect, sendMessage);

export default router;
