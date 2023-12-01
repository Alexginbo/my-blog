const express = require('express')
const router = express.Router()
const postController = require('./controllers/PostController')
const authController = require('./controllers/AuthController')

router.get("/posts", postController.getAllPosts)
router.post("/posts", postController.uploadPost)
router.get("/register-admin", authController.register) 

module.exports = router;