const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
    registerUser: (req, res, next) => {
        let {username, email, password} = req.body;
        new User({username, email, password}).save((err, user) => {
            if (err)
                res.send(err)
            else if (!user)
                res.send(400)
            else {
                return user.saveUser().then((_user) => {
                    return res.send(_user)
                })
            }
        })
    },
    loginUser: (req, res, next) => {
        let {username, password} = req.body;
        console.log(req.body);
        User.findOne({'username': username}, function(err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                console.log('No user with that username found')
            }
            if (!user.validPassword(password)) {
                console.log('Wrong password')
            }
            else {
                console.log('Successful login');
                res.send({userId: user._id, loggedIn: 1})
            }
        })
    }
}
