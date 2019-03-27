const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        required: [true, 'Chat must have a sender']
    },
    // ReceiverId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: [true, 'Chat must have a receiver']
    // },
    body: {
        type: String,
        required: [true, 'Chat must have content']
    }
}, { timestamps: true }) // Look at props.js for completion

module.exports = mongoose.model('Chat', chatSchema);