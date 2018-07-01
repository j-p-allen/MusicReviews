const mongoose = require('mongoose')

let CommentSchema = new mongoose.Schema(
    {
    	user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String,
        votes: Number,
        votingUsers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    }
)

module.exports = mongoose.model('Comment', CommentSchema)