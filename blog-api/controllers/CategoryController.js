const Category = require('../models/category')

function createCategory (req, res) {
    let categoryToSave = new Category()
    if (req.body.parentCategory && req.body.parentCategory !== "") {
        Category.findOne({ 'categoryName': req.body.parentCategory}).then(
            (foundCategory, err) => {
                if (err || !foundCategory) {
                    return res.status(404).send({
                        msg: 'Parent Category Not Found',
                        err: err
                    })
                } else {
                    categoryToSave.parentCategory = foundCategory
                    categoryToSave.categoryName = req.body.categoryName
                    categoryToSave = categoryToSave.save()
                    return res.status(200).send({
                        categoryToSave: categoryToSave
                    })
                }
            }
        )
    } else {
                    categoryToSave.categoryName = req.body.categoryName
                    categoryToSave.save()
                    return res.status(200).send({
                        categoryToSave: categoryToSave
                    })
    }
    
}

module.exports = {
    createCategory
}