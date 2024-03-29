const citiesActions =  {

    totalCities: () => {
        //ACTION QUE PIDE TODAS LAS CIUDADES
        return async(dispatch, getState) => {
           const respuestaAPI = await fetch('http://localhost:4000/api/cities')
           const data = await respuestaAPI.json()
                
            dispatch({type: 'LISTA_CIUDADES', payload: data.res})                               
    }   
},
//FILTRA LAS CIUDADES CUANDO EL USUARIO ESCRIBE ALGO EN EL INPUT
filterCities: filtro => {
        return async (dispatch, getState) => {
            dispatch({type: 'FILTER_CITIES', payload: filtro})
        }
    },

}
   
 
export default citiesActions