import express from 'express';
import {addMessage, deleteChat, getChat, getChatByGroupId, getChats, updateChat} from "../controllers/chat_con.js";

const router = express.Router();

router.get('/',  getChats);
router.get('/group/:id',  getChatByGroupId);
router.post('/', addMessage);
router.get('/:id', getChat );
router.put('/:id', updateChat);
router.delete('/:id',  deleteChat);


export default router;
