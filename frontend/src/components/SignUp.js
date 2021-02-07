import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import usersActions from './../redux/actions/usersActions';
import Swal from 'sweetalert2';
import Header from '../components/Header'

const SignUp = (props) => {
    const { agregarUser } = props

    const [paises, setPaises] = useState([])

    useEffect( ()=> {

         fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(paisesCargados => setPaises(paisesCargados))
        
       
    }, [])
    
   
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

            if(respuesta.errores.details){
                setErrores(respuesta.errores.details.map(detail => detail.message))
            }else{
                setErrores(respuesta.errores)
            }
        }else{
            Swal.fire('Usuario nuevo grabado')
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
            <p onChange={capturarUsuario}>Country
                <select name="country">             
                    <option defaultValue disabled>--</option>
                    {paises.map(pais => <option key={pais.name}>{pais.name}</option>)}
                </select>
            </p>
           
            <input type="text" name="profilePic" placeholder="Add a photo" autoComplete="off" onChange={capturarUsuario}/>
            <button className="btnItinerary" onClick={enviarUsuario}>Create Account</button>
            {errores && <div>
                {errores.map(error => <p key={error.message}>{error}</p>)}
            </div>  
            }
                   
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
    agregarUser: usersActions.agregarUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

//CLAVE DE GOOGLE
//70385013439-khieu2v6lposk8k37147t8a5hun6n15j.apps.googleusercontent.com