const express = require('express')
const router = express.Router()
const postController = require('./controllers/PostController')
const authController = require('./controllers/AuthController')
const categoryController = require('./controllers/CategoryController')

router.get("/posts", postController.getAllPosts)
router.post("/upload-post", postController.uploadPost)
//router.get("/register-admin", authController.register)
router.post("/create-category", categoryController.createCategory)

module.exports = router;