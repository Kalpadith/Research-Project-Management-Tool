import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    studentGroupId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Chats = mongoose.model('chat', chatSchema);

export default Chats;
