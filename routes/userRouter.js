import express from 'express';
import { registerUser, addToFriendsList } from '../controllers/userController.js';

export const userRoute = express.Router();


userRoute.post('/', registerUser);
userRoute.post('/follow/:friendId', addToFriendsList);