const User = require('../models/user')
const bcrypt = require('bcrypt')

function login (req, res) {
    
}

async function register(req, res) {
    /*let userToSave = new User();
    userToSave.email = 'ginbodev@gmail.com'
    bcrypt.hash('1712199aA*', 10).then((encryptedPassword) => {
        userToSave.password = encryptedPassword
        userToSave.save();
        return res.status(200).send({
            userToSave
        })
    })*/
}

module.exports = {
    register
}