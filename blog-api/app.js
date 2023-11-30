const path = require('path')
const express =  require('express')
const mongoClient = require('mongodb')
const bodyParser = require('body-parser')
const url = "mongodb+srv://alexginbo:slKCbON5MPIa1rvo@my-blog-cluster.b7j2a9g.mongodb.net/?retryWrites=true&w=majority"
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const routes = require('./routes.js')
//const postRouter = require("./Routes/post");

//bodyparser allows us to access req.body from within routes

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('', routes)
const PORT = process.env.PORT || 3000
//app.use("/api/posts", postRouter)
app.listen(PORT, (req, res) => {
    console.log('listening on port 3000')
})