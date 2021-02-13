import React, { useState } from 'react'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import Swal from 'sweetalert2';
import Header from './Header'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom';


const LogIn = (props) => {
    const { loguearUser } = props

    const [error, setError] = useState("")
    const [usuarioALoguear, setUsuarioALoguear] = useState({
        userName: '',
        password: '',
    })
 
    const capturarUsuario = e => {
        const propiedad = e.target.name
        const valor = e.target.value
        
        setUsuarioALoguear({
            ...usuarioALoguear,
            [propiedad]: valor
        })
    }
  

    const loguearUsuario = async e => {
        e.preventDefault()
        if(usuarioALoguear.userName === '' || usuarioALoguear.password === ''){
            Swal.fire('Completa todos los campos')
            return false
        }
        setError([])
        const respuesta = await loguearUser(usuarioALoguear)
         
        if(respuesta && !respuesta.success){
            setError(respuesta.respuesta)
        }else{ 
             console.log(respuesta)
            Swal.fire('Welcome ')
    
        }
    }

    const responseGoogle = async (response) => {
        if(response.error){
            Swal.fire('Error al loguearse con Google')
        }else{
            const respuesta = await loguearUser({
                userName: response.profileObj.email,
                password: response.googleId+"d",
            })
            console.log(response)
        if(respuesta && !respuesta.success){
            setError(respuesta.respuesta)
        }else{
            
            Swal.fire('Welcome '+response.profileObj.givenName)
    
        }
        }
    }
  
    return (
        <>
        <Header />
        <div className="logIn" style={{backgroundImage: 'url("../assets/pexels-photo-413960.jpeg")'}}>
            <h6>Log In</h6>
            <input type="text" name="userName" placeholder="Email" autoComplete="off" onChange={capturarUsuario}/>
            <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={capturarUsuario}/>
            <button className="btnItinerary" onClick={loguearUsuario}>Log In</button>
            <div className="errores">
              {error}
            </div>
            <GoogleLogin
                clientId="70385013439-khieu2v6lposk8k37147t8a5hun6n15j.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
                
            <Link to="/signup" className="navLink">Don't have account? Create one here!</Link>     
        </div>
       </>
    )
}

const mapStateToProps = state => {
    return {
        users: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    loguearUser: usersActions.loguearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)