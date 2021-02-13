import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import usersActions from './../redux/actions/usersActions';
import GoogleLogin from 'react-google-login'
import Swal from 'sweetalert2';
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const { agregarUser } = props
    //VARIABLE DE ESTADO PARA LA API DE PAÍSES
    const [paises, setPaises] = useState([])

    useEffect( ()=> {
         fetch('https://restcountries.eu/rest/v2/all')
         .then(res => res.json())
         .then(paisesCargados => setPaises(paisesCargados))  
    }, [])
    
   //SI EXISTEN ERRORES EN EL BACK, LOS CAPTURA EN ESTE STATE
    const [errores, setErrores] = useState([])
//VARIABLE QUE CREA EL NUEVO USUARIO
    const [nuevoUsuario, setNuevoUsuario] = useState({
        userName: '', 
        name: '', 
        lastName: '', 
        country: '', 
        password: '',
    })
    
    //CAPTURA EL VALOR DE LOS INPUTS, SELECT Y USUARIOS CREADOS CON GOOGLE
    const capturarUsuario = e => {
        const propiedad = e.target.name
        const valor = e.target.value
        
        setNuevoUsuario({
            ...nuevoUsuario,
            [propiedad]: valor
        })
    }
//DESPACHA LA ACCION QUE HACE UN PEDIDO POST A LA API CON EL NUEVO USUARIO
    const enviarUsuario = async e => {
        e.preventDefault()
        //EVITA QUE LOS CAMPOS ESTÉN SIN VALOR
        if(nuevoUsuario.userName === '' || nuevoUsuario.name === '' || nuevoUsuario.lastName === '' || nuevoUsuario.country === '' || nuevoUsuario.password === ''){
            Swal.fire('Todos los campos son obligatorios')
            return false
        }
        //LIMPIA LOS ERRORES, PARA QUE NO QUEDEN RENDERIZADOS EN EL DOM
        setErrores([])
        //EJECUTA LA ACCIÓN
        const respuesta = await agregarUser(nuevoUsuario)
        //SI HAY ERRORES, LOS MAPEA Y LOS RENDERIZA, SINO ENVÍA UN MODAL DICIENDO QUE FUE GRABADO EL NUEVO USUARIO
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
    //CAPTURA LOS DATOS DE GOOGLE, EJECUTA LA ACTION NUEVAMENTE, PERO CON LOS DATOS DE GOOGLE
    const responseGoogle = async (response) => {
      //SI HAY ERROR AL AUTENTICAR, ENVÍA UN MODAL, SINO, GRABA EL NUEVO USUARIO
        if(response.error){
            Swal.fire('Error al autenticar con google')
        }else{
            const respuesta = await agregarUser({
                userName: response.profileObj.email,
                password: response.googleId+"d",
                name: response.profileObj.givenName,
                lastName: response.profileObj.familyName,
                profilePic: response.profileObj.imageUrl,
                country: 'Argentina'
            })
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
    }

    return (
        <>
        <Header />
        <div  className="signUp" style={{backgroundImage: 'url("../assets/pexels-photo-2147486.jpeg")'}}>
            <h6>Register</h6>
            <input type="text" name="userName" placeholder="Email" autoComplete="off" onChange={capturarUsuario}/>
            <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={capturarUsuario}/>
            <input type="text" name="name" placeholder="Name" autoComplete="off" onChange={capturarUsuario}/>
            <input type="text" name="lastName" placeholder="Last name" autoComplete="off" onChange={capturarUsuario}/>
            <p onChange={capturarUsuario} className="apiCiudades">Country
                <select name="country">             
                    <option selected disabled>--</option>
                    {paises.map(pais => <option key={pais.name}>{pais.name}</option>)}
                </select>
            </p>
           
            <input type="text" name="profilePic" placeholder="Add a photo" autoComplete="off" onChange={capturarUsuario}/>
            <button className="btnItinerary" onClick={enviarUsuario}>Create Account</button>
            <GoogleLogin
                className="google"
                clientId="70385013439-khieu2v6lposk8k37147t8a5hun6n15j.apps.googleusercontent.com"
                buttonText="Create Account with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/>
            {errores && <div>
                {errores.map(error => <p key={error.message}>{error}</p>)}
            </div>  
            }
            <div>
                <Link to="/login" className="navLink" style={{color: 'black'}}>Do you already have an account? Log in here</Link>
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
    agregarUser: usersActions.agregarUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

