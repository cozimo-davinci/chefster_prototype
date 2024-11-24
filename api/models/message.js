const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    messageType: {
        type: String,
        enum: ['text', 'image', 'video', 'audio'],
    },
    message: {
        type: String,
        trim: true
    },
    imageURL: {
        type: String
    },
    videoURL: {
        type: String
    },
    audioURL: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }

});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;