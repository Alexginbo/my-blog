const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    categoryName: {type: String, unique: true},
    parentCategory: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = mongoose.model('Category', categorySchema)