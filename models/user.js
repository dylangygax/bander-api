const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
     username: {type: String, required: true, unique: true},
     password: {type: String, required: true},
     isBand: Boolean,
     email: String,
     musicUrl: String,
	bio: String,
	genre: String,
	location: String,
	instrument: String,
})

// methods
UserSchema.methods = {
     //hash text password
     hashPassword: function (plainTextPassword) {
          const salt = bcrypt.genSaltSync(10)
          return bcrypt.hashSync(plainTextPassword, salt)
     },
     //check password enetered matches the one in the database
     checkPassword: function (inputPassword) {
          return bcrypt.compareSync(inputPassword, this.password)
     }
}

UserSchema.pre('save', function(next) {
     if (!this.password){
          next()
     } else {
          this.password = this.hashPassword(this.password)
          console.log(this.password)
          next()
     }
})

const User = mongoose.model('User', UserSchema)
module.exports = User