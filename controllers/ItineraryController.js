const Itinerary = require('../models/Itinerary')

const itineraryController = {
    addItinerary: (req, res) => {
        const {itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity} = req.body
        const itineraryAGrabar = new Itinerary({
            itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity
        })
        itineraryAGrabar.save()
        .then( async itineraryGrabado =>   {
            const itineraryPopulate = await itineraryGrabado.populate('idCity').execPopulate()
            res.json({success: true, respuesta: itineraryPopulate})
        })
        .catch(error => {
            return res.json({success: false, error})
        })
    }
}


module.exports = itineraryController