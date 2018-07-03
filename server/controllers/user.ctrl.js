const User = require('./../models/User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
    registerUser: (req, res, next) => {
        console.log(req.body);
        let {username, email, password} = req.body
        saveUser({ username, email, password });

        function saveUser(obj) {
          new User(obj).save((err, user) => {
            if (err)
              res.send(err)
            else {
              return res.send(user)
            }
            next()
          })
        }
    }
}
