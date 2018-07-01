const mongoose = require('mongoose')
const Comment = require('./Comment')

let PostSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        posted: Date,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [{
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Comment'
        }]
    }
);
PostSchema.methods.clap = function() {
    this.claps++
    return this.save()
}
PostSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}
PostSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
PostSchema.methods.getUserPosts = function (_id) {
    Post.find({'author': _id}).then((posts) => {
        return posts
    })
}
module.exports = mongoose.model('Post', PostSchema)