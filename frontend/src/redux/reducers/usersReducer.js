const initialState = {
    loggedUser: null
}

export const usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'NUEVO_USER':
            return{
                ...state,
                loggedUser: action.payload
            }
        case 'LOG_OUT':
            return {
                ...state,
                loggedUser: null
            }
        case 'LOG_IN':
            return{
                ...state,
                loggedUser: action.payload.respuesta
            }
            default: 
            return state
    }
}