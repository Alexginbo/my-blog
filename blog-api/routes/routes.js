module.exports = function (app) {
    app.get('/getHealthCheck', (req, res) => {
        return res.status(404).send(true)
    })
}