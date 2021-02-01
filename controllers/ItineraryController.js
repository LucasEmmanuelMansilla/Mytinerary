const City = require('../models/City')
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
<<<<<<< HEAD
        Itinerary.find({idCity: id})
=======
        Itinerary.find({idCity: id}).populate('idCity')
>>>>>>> 80530cf9c74f467d20ce57c6506f69b295f4b90c
            .then(data => {
            res.json({success: true, respuesta: data})
        })
        .catch(error => {
            return res.json({success: false, error})
        }
<<<<<<< HEAD
        )},
 
    modifyItinerary : async (req, res) => {
        const { id } = req.params
        Itinerary.findByIdAndUpdate({idCity : id}, )
=======
        )}
>>>>>>> 80530cf9c74f467d20ce57c6506f69b295f4b90c
    }




module.exports = itineraryController