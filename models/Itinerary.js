const mongoose = require('mongoose')


const itineraryScheema = new mongoose.Schema({
    time : {type: Date, default: Date.now
 } ,
   itineraryTitle: {type: String, required: true},
   userItinerary: {type: String, required: true},
   photoUser: {type: String, required: true},
   likes: {type: Number, default: 0},
   hours: {type: Number, required: true},
   price: {type: Number, required: true},
   hashtag: [""],
   activities: [{
       imageActivity: {type: String, required: true},
       titleActivity: {type: String, required: true}
   }],
   comments: [{
       userComment: {type: String},
       commentPic: {type: String},
       comment: {type: String}
   }
   ],
   idCity: {type: mongoose.Schema.ObjectId, ref: 'city'}
})

const Itinerary = mongoose.model('itinerary', itineraryScheema)


module.exports = Itinerary