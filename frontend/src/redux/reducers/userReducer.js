const initialState = {
    loggedUser: null
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'LOG_USER':
            return{
                ...state,
                loggedUser: action.payload
            }
        case 'LOG_OUT':
            return {
                ...state,
                loggedUser: null
            }
      
            default: 
            return state
    }
}