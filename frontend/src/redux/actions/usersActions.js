import axios from 'axios'

const usersActions = {
    agregarUser: nuevoUsuario => {
        return async (dispatch) => {
            const nuevoUser = await axios.post('http://localhost:4000/api/user/signup', nuevoUsuario)
            if(!nuevoUser.data.success){
                return nuevoUser.data
            }
          
            dispatch({type: 'LOG_USER', payload: nuevoUser.data.respuesta})
     
        }
    },

    logoutUser: () => {
        return (dispatch) => {
            dispatch({type: 'LOG_OUT'})
        }
    },
    loguearUser: usuario => {
        return async (dispatch) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/login', usuario)
            if(!respuesta.data.success){
           
                return respuesta.data
            }     
            
            dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
        } 
       
    }
}

export default usersActions