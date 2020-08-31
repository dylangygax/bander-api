//require
const db = require('../models')

//controllers
const index = (req, res) => {
     db.User.find({}, (err, foundUsers) => {
          if (err) console.log(`error in users#index: ${err}`)
          res.status(200).json({ users: foundUsers })
     })
}

const results = (req, res) => {
     let bandQuery = req.body.isBand == "band" ? true : false;
     let query;

     if (req.body.isBand == "") {
          query = {
               $or: [
                    { genre: { $in: req.body.genres } },
                    { instruments: { $in: req.body.instruments } },
               ]
          }
     }
     else {
          query = {
               $or: [
                    { genre: { $in: req.body.genres } },
                    { instruments: { $in: req.body.instruments } },
                    { isBand: bandQuery }
               ]
          }
     }

     db.User.find(query, (err, foundUsers) => {
          console.log(query);
          if (err) console.log(`error in users#filter: ${err}`)
<<<<<<< HEAD
          console.log("request received", req.body.isBand);
          res.status(200).json({ users: foundUsers })
     })
     console.log(res);

=======
          console.log("request received", req.body);
          res.status(200).json({users: foundUsers})
     });
>>>>>>> 756df44479b8d81f75aa28d9b1c92d55cc77362c
}


const show = (req, res) => {
     db.User.findById(req.params.id, (err, foundUser) => {
          if (err) console.log(`error in users#show: ${err}`)
          res.status(200).json({ user: foundUser })
     })
}

const create = (req, res) => {
     db.User.create(req.body, (err, createdUser) => {
          if (err) console.log(`error in users#create: ${err}`)
          res.status(200).json({ user: createdUser })
     })
}

const update = (req, res) => {
     db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
          console.log("userId: " + req.params.id);
          if (err) console.log(`error in users#update: ${err}`)
          res.status(200).json({
               user: updatedUser,
          })
     })
}

const destroy = (req, res) => {
     db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
          if (err) console.log(`error in users#destroy: ${err}`)
          res.send(`user deleted successfully`)
     })
}

module.exports = {
     index,
     show,
     create,
     update,
     destroy,
     results
}