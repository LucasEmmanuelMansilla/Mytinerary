const initialState = {
    cities: [],
    citiesFiltradas: [],
    city: []
}

export const citiesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LISTA_CIUDADES':
        return {
            ...state,
            cities: action.payload
        }
       case 'FILTER_CITIES':
           return{
               ...state,
                citiesFiltradas: state.cities.filter(ciudades => ciudades.name.toLowerCase().indexOf(action.payload, 0) === 0)
           }
         case 'CITY_POR_ID':
             return {
                 ...state,
                 city: state.cities.filter(ciudad => ciudad._id === action.payload)
             }
        default:
            return state

    }
} 
