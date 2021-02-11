import { set } from "mongoose"

const initialState = {
    itineraries: [],
    comments: null
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
        case 'ADD_COMMENT':
            return{
                comments: action.payload
            }
             default: 
            return state
    }
}