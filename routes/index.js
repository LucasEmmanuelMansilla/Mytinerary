const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController.js')






router.route('/cities')
.get(cityController.allCities)


router.route('/city/:id')
.get(cityController.oneCity)


module.exports = router