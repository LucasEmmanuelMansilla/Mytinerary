const initialState = {
    cities: [],
    cityIndividual: []
}

export const citiesReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LISTA_CIUDADES':
        return {
            ...state,
            cities: action.payload
        }
        case 'CIUDAD_INDIVIDUAL':
            return{
                ...state,
                cityIndividual:  action.payload 
            }
        default:
            return state

    }
} 
