const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
     email: {type: String, required: true, unique: true},
     username: {type: String, required: true},
     password: {type: String, required: true},
     isBand: {type: Boolean, required: false},
     musicUrl: {type: String, required: false},
     useSpotifyEmbed: {type: Boolean, required: false, default: false},
	bio: {type: String, required: false},
	genre: {type: String, required: false},
    lattitude: {type: Number, required: false},
    longitude: {type: Number, required: false},
    instrument: {type: String, required: false},
    usersLiked: [{type: mongoose.Schema.Types.ObjectId, 
          ref: 'User',
          required: false
    }],
    usersDisliked: [{type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: false
    }],
    usersWhoLikeYou: [{type: mongoose.Schema.Types.ObjectId, 
          ref: 'User',
          required: false
    }],
    matches: [{type: mongoose.Schema.Types.ObjectId, 
          ref: 'User',
          required: false
    }]
})

// methods
UserSchema.methods = {
          // //format any spotify link for embed
        //   formatEmbedLink: function () {
        //        console.log('in format embed link')
        //        if (this.musicUrl.includes('spotify.com')) {
        //             const insertionPosition = this.musicUrl.indexOf('spotify.com') + 11
        //             this.musicUrl = this.musicUrl.slice(0, insertionPosition) + '/embed' + this.musicUrl.slice(insertionPosition)
        //             this.useSpotifyEmbed = true
        //        }
        //   },
     //hash text password
     hashPassword: function (plainTextPassword) {
        //   console.log('in format embed link')
        //   if (this.musicUrl.includes('spotify.com')) {
        //        const insertionPosition = this.musicUrl.indexOf('spotify.com') + 11
        //        this.musicUrl = this.musicUrl.slice(0, insertionPosition) + '/embed' + this.musicUrl.slice(insertionPosition)
        //        this.useSpotifyEmbed = true
        //   }
          const salt = bcrypt.genSaltSync(10)
          return bcrypt.hashSync(plainTextPassword, salt)
     },
     //check password entered matches the one in the database
     checkPassword: function (inputPassword) {
          return bcrypt.compareSync(inputPassword, this.password)
     }
}

UserSchema.pre('save', function(next) {
     //make any spotify links embeddable
     //formatEmbedLink()
     //hash password
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