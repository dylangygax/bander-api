const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
     username: String,
     isBand: Boolean,
     email: String,
     musicUrl: String,
	bio: String,
	genre: String,
	location: String,
	instrument: String,
})

const User = mongoose.model('User', UserSchema)
module.exports = User