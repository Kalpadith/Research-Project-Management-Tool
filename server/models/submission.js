
import mongoose from 'mongoose';

const submissiontypesSchema = mongoose.Schema({

    submission_id: {
        type: String,
        required: true
    },
    submission_name: {
        type: String,
        required: true
    },
    Submission_category: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    submission: {
        type: String,
        required: true
    },
    studentgroup_no: {
        type: String,
        required: true
    }
})

const  submissiontypes = mongoose.model('submissiontypes',  submissiontypesSchema);

export default  submissiontypes;






// submission_id:
//     :
// "sub0001"
// submission_name
//     :
//     "first submission"
// Submission_category
//     :
//     "reserch project"
// document
//     :
//     "word"
// due_date
//     :
//     "2022/06/03"
// submission
//     :
//     "added"
// studentgroup_no
//     :
//     "GRP1"