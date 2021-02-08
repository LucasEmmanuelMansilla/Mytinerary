const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')
require('dotenv').config()



module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.CLAVE_TOKEN
}, 
(payload, done) => {
    User.findById(payload._doc._id)
    .then(usuario => {
        if(!usuario){
            return done(null, false)
        }else{
            return done(null, usuario)
        }
    })
    .catch(error => {
        return done(error, false)
    })
}))