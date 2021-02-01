const Itinerary = require('../models/Itinerary')

const itineraryController = {
    addItinerary: (req, res) => {
        const {itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity} = req.body
        const itineraryAGrabar = new Itinerary({
            itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity
        })
        itineraryAGrabar.save()
        .then( async itineraryGrabado =>   {
            const itineraryPopulate = await itineraryGrabado
            res.json({success: true, respuesta: itineraryPopulate})
        })
        .catch(error => {
            return res.json({success: false, error})
        })
    },

    itineraries:  async (req, res) => {
        const {id} = req.params
        Itinerary.find({idCity: id})
            .then(data => {
            res.json({success: true, respuesta: data})
        })
        .catch(error => {
            return res.json({success: false, error})
        }
        )},
 
    modifyItinerary : async (req, res) => {
        const { id } = req.params
        Itinerary.findByIdAndUpdate({idCity : id}, )
    }
}



module.exports = itineraryController