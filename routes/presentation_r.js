import express from 'express';

import { getpresentations, addpresentation, getpresentation, updatepresentation, deletepresentation } from '../controllers/presentation_con.js';

const router = express.Router();

router.get('/', getpresentations);
router.post('/', addpresentation);
router.get('/:id', getpresentation);
router.patch('/:id', updatepresentation);
router.delete('/:id', deletepresentation);


export default router;