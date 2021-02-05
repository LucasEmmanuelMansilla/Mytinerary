import React, { useState } from 'react'
import { connect } from 'react-redux';
import usersActions from './../redux/actions/usersActions';
import Swal from 'sweetalert2';
import Header from '../components/Header'

const SignUp = (props) => {
    const { agregarUser, users } = props
   console.log(props)
    console.log(users)
    const [errores, setErrores] = useState([])
    const [nuevoUsuario, setNuevoUsuario] = useState({
        userName: '', 
        name: '', 
        lastName: '', 
        country: '', 
        password: '',
    })
    
    const capturarUsuario = e => {
        const propiedad = e.target.name
        const valor = e.target.value
        
        setNuevoUsuario({
            ...nuevoUsuario,
            [propiedad]: valor
        })
    }

    const enviarUsuario = async e => {
        e.preventDefault()
        if(nuevoUsuario.userName === '' || nuevoUsuario.name === '' || nuevoUsuario.lastName === '' || nuevoUsuario.country === '' || nuevoUsuario.password === ''){
            Swal.fire('Todos los campos son obligatorios')
            return false
        }
        setErrores([])
        const respuesta = await agregarUser(nuevoUsuario)
        if(respuesta && !respuesta.success){
            setErrores(respuesta.errores)
        }else{
            Swal.fire('Usuario nuevo grabado')
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
            <input type="text" name="name" placeholder="Name" autoComplete="off" onChange={capturarUsuario}/>
            <input type="text" name="lastName" placeholder="Last name" autoComplete="off" onChange={capturarUsuario}/>
            <input type="text" name="country" placeholder="Country" autoComplete="off" onChange={capturarUsuario}/>
            <input type="text" name="profilePic" placeholder="Add a photo" autoComplete="off" onChange={capturarUsuario}/>
            <button className="btnItinerary" onClick={enviarUsuario}>Create Account</button>
            <div>
                {errores.map(error => <p key={error}>{error}</p>)}
            </div>         
        </div>
       </>
    )
}


const mapStateToProps = state => {
    return {
        users: state.usersR.loggedUser
    }
}

const mapDispatchToProps = {
    agregarUser: usersActions.agregarUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

//CLAVE DE GOOGLE
//70385013439-khieu2v6lposk8k37147t8a5hun6n15j.apps.googleusercontent.com