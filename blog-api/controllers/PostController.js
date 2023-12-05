const Post = require('../models/post')
const Category = require('../models/category')

function getAllPosts(req, res) {
    
}

async function uploadPost(req, res) {
    let postToSave = new Post()
    let categoryFound = null
    if (!req.body.categories || !req.body.postTitle || !req.body.postSubtitle ||
        !req.body.markdownText) {
            return res.status(400).send({
                msg: 'Please, fill all the fields'
            })
    }

    await req.body.categories.forEach(async (category) => {
        categoryFound = await Category.findOne({ 'categoryName': category})
        if (categoryFound) {
            postToSave.categories.push(categoryFound)
        } else {
            return res.status(400).send({
                msg: `The category ${category} doesn't exists`  
            })
        }
    })

    await req.body.tags.forEach(async (tag) => {
        tagFound = await Category.findOne({ 'categoryName': tag})
        if (tagFound) {
            postToSave.tags.push(tagFound)
        } else {
            return res.status(400).send({
                msg: `The category ${tag} doesn't exists`  
            })
        }
    })

    postToSave.postTitle = req.body.postTitle
    postToSave.postSubtitle = req.body.postSubtitle
    postToSave.markdownText = req.body.markdownText
    postToSave.createdAt = new Date()
    postToSave.active = req.body.active
    
    postToSave = await postToSave.save()
    if (postToSave) {
        res.status(200).send({
            postToSave: postToSave
        })
    }
}

module.exports = {
    getAllPosts,
    uploadPost
}