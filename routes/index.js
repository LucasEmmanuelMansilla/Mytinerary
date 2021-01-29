const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/ItineraryController')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)


router.route('/city/')
.post(itineraryController.addItinerary)



module.exports = router