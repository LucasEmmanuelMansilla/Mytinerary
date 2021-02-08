import axios from 'axios'
import Swal from 'sweetalert2';

const usersActions = {
    //HACE UNA PETICIÓN POST PARA CARGAR UN NUEVO USUARIO Y LOGUEARLO
    agregarUser: nuevoUsuario => {
        return async (dispatch) => {
            const nuevoUser = await axios.post('http://localhost:4000/api/user/signup', nuevoUsuario)
            if(!nuevoUser.data.success){
                return nuevoUser.data
            }
            dispatch({type: 'LOG_USER', payload: nuevoUser.data.respuesta})  
        }
    },
    //BORRA LOS DATOS DEL LOCALSTORAGE CUANDO EL USUARIO SE DESLOGUEA
    logoutUser: () => {
        return (dispatch) => {
            dispatch({type: 'LOG_OUT'})
        }
    },
    //LOGUEA UN USUARIO YA CREADO
    loguearUser: usuario => {
        return async (dispatch) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/login', usuario)
            if(!respuesta.data.success){
           
                return respuesta.data
            }     
            
            dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
        }      
    },

    //COMPRUEBA LOS DATOS GRABADOS EN EL LOCALSTORAGE, ENVÍA UN TOKEN AL BACK PARA QUE PASSPORT COMPRUEBE SI ES VÁLIDO O NO
    logFromLocalStorage: (token) => {
        return async (dispatch) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
                dispatch({type: 'LOG_USER', payload: respuesta.data.respuesta})
            }catch(error){
                //SI EL TOKEN NO COINCIDE DEVUELVE UN ERROR AL FRONT Y UN RETURN FALSE, PARA QUE LA VARIABLE "RECARGA" DE APP ACTUALICE SU ESTADO
                if(error.response.status === 401){
                    Swal.fire('Acción no autorizada')
                }
                localStorage.clear()
                return false
            
            }           
        }
    }
}

export default usersActions