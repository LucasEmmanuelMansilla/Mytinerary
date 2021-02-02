const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/ItineraryController.js')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/city')
.post(itineraryController.addItinerary)

router.route('/itineraries/:id')
.get(itineraryController.itineraries)
.put(itineraryController.modifyItinerary)


module.exports = router