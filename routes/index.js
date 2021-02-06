const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController.js')
const itineraryController = require('../controllers/ItineraryController.js')
const userController = require('../controllers/userController.js')
const validator = require('../controllers/validator')



router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/city')
.post(itineraryController.addItinerary)

router.route('/itineraries/:id')
.get(itineraryController.itineraries)
.put(itineraryController.modifyItinerary)


router.route('/user/signup')
.post(validator.validateAccount, userController.addUser)

router.route('/user/login')
.post(userController.logInUser)

module.exports = router