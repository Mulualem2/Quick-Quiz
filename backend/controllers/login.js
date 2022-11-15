const User = require('../models/user.model')

exports.login = (req, res, next) => {
    new User({ username: 'Nahom Habtamu Debalkie' }).save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}