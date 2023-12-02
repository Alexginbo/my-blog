const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    postTitle: {type: String},
    postSubtitle: {type: String},
    markdownUrl: {type: String},
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Categorys'}]
})

module.exports = mongoose.model('Post', postSchema)