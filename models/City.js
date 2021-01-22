const mongoose = require('mongoose')


const cityScheema = new mongoose.Schema({
    name: {type: String, required: true},
    url: {type: String, required: true}
})

const City = mongoose.model('city', cityScheema)


module.exports = City