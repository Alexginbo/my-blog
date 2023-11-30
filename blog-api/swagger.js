const swaggerAutogen = require('swagger-autogen')
const outputFile = './swagger.json'
const endpoints = ['./routes.js']

swaggerAutogen(outputFile, endpoints).then(() => {
    require('./app')
})