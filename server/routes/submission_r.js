import express from 'express';


import {
    addSubmissionTypes, deleteSubmissionType, getSubmissionsTypes, getSubmissionType, updateSubmissionType
} from "../controllers/submission_con.js";

const router = express.Router();

router.get('/', getSubmissionsTypes);
router.post('/', addSubmissionTypes);
router.get('/:id', getSubmissionType);
router.patch('/:id', updateSubmissionType);
router.delete('/:id', deleteSubmissionType);


export default router;
