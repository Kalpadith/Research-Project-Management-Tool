import express from 'express';

import {getsupervisorId, addemail, getpassword, updatefirstname, deletelastname } from "../controllers/supervisor_con.js";

const router = express.Router();

router.get('/', getsupervisorId);
router.post('/', addemail);
router.get('/:id', getpassword);
router.patch('/:id', updatefirstname);
router.delete('/:id', deletelastname);


export default router;