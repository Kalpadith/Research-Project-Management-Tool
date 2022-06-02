import mongoose from 'mongoose';

const submissionTypeSchema = mongoose.Schema({
   
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
    },
    document :[Object],
    submission:[Object]
})

var submissionType = mongoose.model('submissionType', submissionTypeSchema);

export default submissionType;