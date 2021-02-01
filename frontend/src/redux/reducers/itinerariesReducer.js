const initialState = {
    itineraries: []
}

export const itinerariesReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'ITINERARIES':
            return{
                ...state,
               itineraries: action.payload
            }
            default: 
            return state
    }
}