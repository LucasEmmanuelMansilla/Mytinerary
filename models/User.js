const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    name: String,
    lastName: String,
    country: String,
    profilePic: String,
    rol: {type: String, default: "noAdmin"}
})


const User = mongoose.model('user', userSchema)


module.exports = User