const { json } = require('express')
const Itinerary = require('../models/Itinerary')

const itineraryController = {
    addItinerary: (req, res) => {
        const {itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity} = req.body
        const itineraryAGrabar = new Itinerary({
            itineraryTitle, userItinerary, photoUser, likes, hours, price, hashtag, activities, comments, idCity
        })
        itineraryAGrabar.save()
        .then( async itineraryGrabado =>   {
            const itineraryPopulate = itineraryGrabado
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
      
        const {newActivities} = req.body
        Itinerary.findByIdAndUpdate({_id : id}, {activities: newActivities })
        .then(respuesta => res.json({success: true, respuesta}))
        .catch(error => res.json({success: false, error}))
    },
    addComment: async (req, res) => {
        Itinerary.findOneAndUpdate(
            {_id: req.body.comment.id},
            { $push : {comments: {
                comment: req.body.comment.comment,
                userComment: req.user.name, 
                commentPic: req.user.profilePic}}}     
        )
        .then( respuesta => {     
           res.json({success: true, respuesta})
        })
        .catch(error => {

            res.json({success: false, error})})
        },

        deleteComment: async (req, res) => {

            const itineraryId = req.params.itineraryId
            const commentId = req.params.commentId
            const borrado = await Itinerary.findOneAndUpdate(
                {_id : itineraryId},
                {
                    $pull: {
                        comments: { _id: commentId}
                    }
                },
                {new: true})
                .then( respuesta => {     
                    res.json({success: true, respuesta: respuesta})
                 })
                 .catch(error => {
         
                     res.json({success: false, error})})
        },
        modifyComment: async (req, res) => {

        const { id } = req.params 
       
       const comentario = await Itinerary.findOneAndUpdate(
            {_id: id, 'comments._id': req.body.commentAEditar.idComment},
            {$set: {'comments.$.comment': req.body.commentAEditar.newComment}},
            {new: true}
          )
        .then(respuesta => res.json({success: true, respuesta}))
        .catch(error => res.json({success: false, error}))
        },

        dislikeItinerary: async (req, res) => {

            const {itineraryId} = req.params
            Itinerary.findOneAndUpdate({_id : itineraryId}, {$pull: {likes: req.user._id}})
            .then(respuesta => res.json({success: true, respuesta}))
            .catch(error => res.json({success: false, error}))
        },

        likeItinerary: async (req, res) => {
           
            const {itineraryId} = req.params
            Itinerary.findOneAndUpdate({_id : itineraryId}, {$addToSet: {likes: req.user._id}})
            .then(respuesta => res.json({success: true, respuesta}))
            .catch(error => res.json({success: false, error}))
        }
}



module.exports = itineraryController