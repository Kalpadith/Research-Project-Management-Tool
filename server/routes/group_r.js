import express from 'express';
import {assignUserForGroup, getUserGroups} from "../controllers/group_con.js";


const router = express.Router();

router.get('/user', getUserGroups);
router.post('/user/assign', assignUserForGroup);

export default router;
