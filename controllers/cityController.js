const City = require('../models/City')


const cityController = { 
    addCity: (req, res) => {
        const {name, url} = req.body
        const cityAGrabar = new City({
            name: name,
            url: url
        })
       cityAGrabar.save()
       .then(cityGrabada => {
           return res.json({success: true, respuesta: cityGrabada})
       })
       .catch(error => {
           return res.json({
               success: false, error: error
           })
       })
    },

    allCities:  (req, res) => {
        City.find()
        .then(data => {
            return res.json({success: true, res: data})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },
    
    oneCity:  (req, res) => {
        const id = req.params.id
        City.findOne({_id:id})
        .then(data => {
            res.json({success: true, respuesta: data})
        })
        

    }
}


module.exports = cityController