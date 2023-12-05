const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    postTitle: {type: String},
    postSubtitle: {type: String},
    markdownText: {type: String},
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    createdAt: {type: Date},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
    active: {boolean}
})

module.exports = mongoose.model('Post', postSchema)