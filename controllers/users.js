//require
const db = require('../models')

//controllers
// index filter show create update destroy
const index = (req, res) => {
     db.User.find({}, (err, foundUsers) => {
          if (err) console.log(`error in users#index: ${err}`)
          //res.send('users index called')
          res.status(200).json({users: foundUsers})
     })
}

const show = (req,res) => {
     db.User.findById(req.params.id, (err, foundUser) => {
          if (err) console.log(`error in users#show: ${err}`)
          //res.send(`user show called`)
          res.status(200).json({user: foundUser})
     })
}

//export
// index filter show create update destroy
module.exports = {
     index,
     show
}