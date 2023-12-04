const Category = require('../models/category')

async function createCategory (req, res) {
    let categoryToSave = new Category()
    if (!req.body.categoryName) {
        return res.status(400).send({
            msg: 'Please, enter a category name'
        })
    }
    if (req.body.parentCategory && req.body.parentCategory !== "") {
        categoryToSave.parentCategory = await Category.findOne({ 'categoryName': req.body.parentCategory})
        if (!categoryToSave.parentCategory) {
            return res.status(404).send({
                msg: 'Parent category not found'
            })
        }
    }
    categoryToSave.categoryName = await Category.findOne({ 'categoryName': req.body.categoryName})
    if (categoryToSave.categoryName) {
        return res.status(400).send({
            msg: 'This category already exists'
        })
    }
    categoryToSave.save().then((savedCategory) => {
        if (savedCategory) {
            return res.status(200).send({
                categoryToSave: categoryToSave
            })
        }
    })
    
}

module.exports = {
    createCategory
}