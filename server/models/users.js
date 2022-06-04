import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    user_Fname: {
        type: String,
        required: true
    },
    user_Lname: {
        type: String,
        required: true
    },
    user_designation: {
        type: String,
        required: true
    },
    user_role: {
        type: String,
        required: true
    },
    user_phone: {
        type: String,
        required: true
    },
    user_avatar: {
        type: String,
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true
    },
    student_id: {
        type: String
    },
    student_grpid: {
        type: String,
        required: true
    },
    assigned_groups: {
        type: String,
        required: true
    },
    user_groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "researchProject"
        }
    ]


})

const users = mongoose.model('users', userSchema);

export default users;
