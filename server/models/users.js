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
    user_email: {
        type: String,
        required: true,
        unique: true   
    },
    user_password: {
        type: String,
        required: true,
        encrypt:true   
    },
    student_id: {
        type: String,
       required: false   
    },
    student_grpid: {
        type: String,
        required: false   
    },
    assigned_groups:{
        type: String,
        required: false   
    },
})

var users = mongoose.model('users', userSchema);

export default users;