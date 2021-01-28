
const citiesActions =  {
    
    citiIndependent: idCity => {
        return async (dispatch, getState) => {
        const res = await fetch ('http://localhost:4000/api/city/'+idCity)
        const data = await res.json()
          
        dispatch({type: 'CIUDAD_INDIVIDUAL', payload: data.respuesta}) 
           
        }     
    },

    totalCities: () => {
        return async(dispatch, getState) => {
           const respuestaAPI = await fetch('http://localhost:4000/api/cities')
           const data = await respuestaAPI.json()
                
            dispatch({type: 'LISTA_CIUDADES', payload: data.res})                                 
    }
}

}
 
export default citiesActions