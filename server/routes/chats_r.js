import express from 'express';
import {addChat, deleteChat, getChat, getChats, updateChat} from "../controllers/chat_con.js";

const router = express.Router();

router.get('/',getChats);
router.post('/', addChat);
router.get('/:id', getChat );
router.patch('/:id', updateChat);
router.delete('/:id',  deleteChat);


export default router;