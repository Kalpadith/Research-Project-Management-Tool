import express from 'express';

import {getsubs, getsub, addsub, updatesub, deletesub } from '../controllers/submissionType_con.js';

const router = express.Router();

router.get('/', getsubs);
router.post('/',addsub);
router.get('/:id',getsub);
router.patch('/:id',updatesub);
router.delete('/:id',deletesub);

export default router;