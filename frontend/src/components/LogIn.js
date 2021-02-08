import React, { useState } from 'react'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import Swal from 'sweetalert2';
import Header from './Header'
import GoogleLogin from 'react-google-login'


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
            Swal.fire('Bienvenido')
    
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
        if(respuesta && !respuesta.success){
            setError(respuesta.respuesta)
        }else{
            Swal.fire('Bienvenido')
    
        }
        }
    }
  
    return (
        <>
        <Header />
        <div style={{display: 'flex ', flexDirection: 'column', width: '100vw', alignItems: 'center', backgroundColor: 'aquamarine'}}>
            <h6>Register</h6>
            <input type="text" name="userName" placeholder="Email" autoComplete="off" onChange={capturarUsuario}/>
            <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={capturarUsuario}/>
            <button className="btnItinerary" onClick={loguearUsuario}>Log In</button>
            <GoogleLogin
                clientId="70385013439-khieu2v6lposk8k37147t8a5hun6n15j.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
            <div>
              {error}
            </div>         
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