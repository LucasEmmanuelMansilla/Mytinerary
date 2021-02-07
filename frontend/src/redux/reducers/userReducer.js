const initialState = {
    loggedUser: null
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'LOG_USER':
            localStorage.setItem('name', action.payload.name)
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('profilePic', action.payload.profilePic)
            
            return{
                ...state,
                loggedUser: action.payload
            }
        case 'LOG_OUT':
            localStorage.clear('')
            return {
                ...state,
                loggedUser: null
            }
      
            default: 
            return state
    }
}