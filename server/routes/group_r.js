import express from 'express';
import {acceptTopic, assignUserForGroup, getUserGroups} from "../controllers/group_con.js";


const router = express.Router();

router.get('/user', getUserGroups);
router.post('/user/assign', assignUserForGroup);
router.post('/acceptTopic', acceptTopic);

export default router;
