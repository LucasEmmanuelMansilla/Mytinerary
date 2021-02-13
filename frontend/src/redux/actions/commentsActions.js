const commentsActions = {
    addComment: comment => {
       
        return async(dispatch, getState) => {
            const ads = getState()
         
            const comentario = await axios.post('http://localhost:4000/api/itineraries/comments', {comment}, {
                headers: {
                    Authorization: `Bearer ${comment.token}`
                }
            })
            
            //  dispatch({type:'ADD_COMMENT', payload: ads.itinerariesR.itineraries})
        
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
}