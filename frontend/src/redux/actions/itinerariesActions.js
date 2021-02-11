import axios from 'axios'

const itinerariesActions = {
    //DEVUELVE TODOS LOS ITINERARIOS
    itineraries: id => {
        
    return async(dispatch, getState) => {
        const respuestaAPI = await axios.get('http://localhost:4000/api/itineraries/'+id)
        dispatch({type:'ITINERARIES', payload: respuestaAPI.data.respuesta})
    }
    },
    comments: comment => {
       
        return async(dispatch) => {
            const comentario = await axios.post('http://localhost:4000/api/itineraries/comments', {comment}, {
                headers: {
                    Authorization: `Bearer ${comment.token}`
                }
            })
            // dispatch({type:'ADD_COMMENT', payload: comentario.data})
        
            if(comentario.data.success === true){
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+comment.idCiudad)
        dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            }        
        }
    },

    deleteComment: commentABorrar => {
      
        return async(dispatch) => {
            const comentarioBorrado = await axios.delete(`http://localhost:4000/api/itinerary/${commentABorrar.itineraryId}/${commentABorrar.idComment}`, {
                headers: {
                    Authorization: `Bearer ${commentABorrar.token}`
                }
            })
        
            if(comentarioBorrado.data.success === true){
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+commentABorrar.idCity)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            }        
        }

            
    },

    editComment: commentAEditar => {
      
        return async (dispatch) => {
            const comentarioEditado = await axios.put(`http://localhost:4000/api/itinerary/${commentAEditar.itineraryId}`, {commentAEditar})

            if(comentarioEditado.data.success === true){
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+commentAEditar.idCiudad)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            } 
        }
    },

    likeItinerary: (id) => {
       
        const token = id.token
     
        return async (dispatch) => {
            const itineraryLikeado = await axios.post(`http://localhost:4000/api/itinerary/like/${id.itineraryId}`, {token}, {
            headers: {
                Authorization: `Bearer ${id.token}`
            }} )
           
            if(itineraryLikeado.data.success === true){
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+id.id)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            } 
          
        }
    },

    dislikeItinerary: (id) => {
        const token = id.token
        return async (dispatch) => {
            const itineraryDislikeado = await axios.post(`http://localhost:4000/api/itinerary/dislike/${id.itineraryId}`, {token}, {
            headers: {
                Authorization: `Bearer ${token}`
            }} )
            
            if(itineraryDislikeado.data.success === true){
                const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+id.id)
                dispatch({type:'ITINERARIES', payload: respuesta.data.respuesta})
            } 
           
        }
    
    }

}

   


export default itinerariesActions