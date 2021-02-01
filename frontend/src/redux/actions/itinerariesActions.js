import axios from 'axios'

const itinerariesActions = {
    itineraries: id => {
    return async(dispatch, getState) => {
        const respuestaAPI = await axios.get('http://localhost:4000/api/itineraries/'+id)
        
        dispatch({type:'ITINERARIES', payload: respuestaAPI.data.respuesta})
    }
    }

}

export default itinerariesActions