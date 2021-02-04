const mongoose = require('mongoose')
const { modelName } = require('./Itinerary')

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    name: String,
    lastName: String,
    country: String,
    profilePic: String
})


const User = mongoose.model('user', userSchema)


module.exports = User