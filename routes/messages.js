import express from 'express';
import { saveMessages, getMessages } from '../controllers/messages.js';

export const router = express.Router();

router.get('/:id', getMessages);

router.post('/save/:id', saveMessages);