import React, { useState } from 'react'
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';
import Swal from 'sweetalert2';
import Header from './Header'

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
            //window.location.href= '/'
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