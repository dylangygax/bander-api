const db = require('../models')
const bcrypt = require('bcrypt')

//login logout register verify
const login = (req, res) => {

}

const logout = (req, res) => {

}

const register = (req, res) => {
     //check to see if neccesary info is there
     if (!(req.body.username && req.body.email && req.body.password)) {
          return res.json({
               message: 'Please enter a username, email, and password'
          })
     }
     //check to make sure the user doesn't already exist
     db.User.findOne({email: req.body.email}, (err, foundUser) => {
          if (err) return res.json(err)
          //if user already exists
          if (foundUser) {
               return res.json({
                    message: 'Email already in use.'
               })
          }
          //if user doesn't already exist
          const newUser = new db.User(req.body)
          newUser.save((err, savedUser) => {
               if (err) return res.json(err)
               res.json(savedUser)
          })
     })
}

const verify = (req, res) => {

}

module.exports = {
     login,
     logout,
     register,
     verify
}