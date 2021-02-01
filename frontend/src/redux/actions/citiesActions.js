const citiesActions =  {

    totalCities: () => {
        return async(dispatch, getState) => {
           const respuestaAPI = await fetch('http://localhost:4000/api/cities')
           const data = await respuestaAPI.json()
                
            dispatch({type: 'LISTA_CIUDADES', payload: data.res})                               
    }   
},

filterCities: filtro => {
        return async (dispatch, getState) => {
            dispatch({type: 'FILTER_CITIES', payload: filtro})
        }
    },

    cityPorId: id => {
        return async(dispatch, getState) => {
            dispatch({type: 'CITY_POR_ID', payload: id})
        }
    }

}
   
 
export default citiesActions