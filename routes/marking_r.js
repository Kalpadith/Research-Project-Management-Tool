import express from 'express';

import {getschemes, addscheme, getscheme, updatescheme, deletescheme } from '../controllers/marking_con.js';

const router = express.Router();

router.get('/', getschemes);
router.post('/',addscheme);
router.get('/:id',getscheme);
router.patch('/:id',updatescheme);
router.delete('/:id',deletescheme);

export default router;