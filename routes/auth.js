// imports
const router = require('express').Router()
const ctrl = require('../controllers')
//Passport 


// router
//path: apli/v1/auth/
// router.post('/login', ctrl.auth.login)
// router.delete('/logout', ctrl.auth.logout)
router.post('/register', ctrl.auth.register)

//router.get('/verify', ctrl.auth.verify)

// exports
module.exports = router