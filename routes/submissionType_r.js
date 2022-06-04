import express from 'express';

import {
    getsubs,
    getsub,
    addsub,
    updatesub,
    deletesub,
    updatesubmission,
    addEvaluation
} from '../controllers/submissionType_con.js';

const router = express.Router();

router.get('/', getsubs);
router.post('/',addsub);
router.get('/:id',getsub);
router.patch('/:id',updatesub);
router.delete('/:id',deletesub);
router.patch('/:id', updatesubmission);
router.post('/evaluation', addEvaluation);

export default router;