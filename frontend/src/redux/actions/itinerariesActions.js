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
            const comentario = await axios.post('http://localhost:4000/api/itineraries/comments', comment)
            dispatch({type: 'ITINERARIES'})
        }
    }

}

export default itinerariesActions