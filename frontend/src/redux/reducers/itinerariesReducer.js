import { set } from "mongoose"

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
        case 'LIKE_ITINERARY':
            return{
                ...state
            }
             default: 
            return state
    }
}