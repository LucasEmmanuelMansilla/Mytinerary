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


<<<<<<< HEAD

=======
>>>>>>> 80530cf9c74f467d20ce57c6506f69b295f4b90c


module.exports = router