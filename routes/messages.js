import express from 'express';
import { saveMessages } from '../controllers/messages.js';

export const router = express.Router();

router.get('/:id', (req, res) => {
    //get all the messages for a chat.
});

router.post('/send/:id', saveMessages);