import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Inicio from './components/Inicio'
import  Ciudad  from './components/Ciudad'
import CiudadesARenderizar from './components/CiudadesARenderizar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';
import { useState } from 'react';

const App=  (props) => {
    //VARIABLE DE ESTADO QUE RECOMENDÓ FER PARA RERENDERIZAR APP Y NO QUEDAR BUGUEADO CUANDO ALGUIEN TOCA COSAS DEL LOCALSTORAGE MANUALMENTE
    const [recarga, setRecarga] = useState(false)
    const {loggedUser, logFromLocalStorage} = props
    //RUTAS DIFERENTES PARA USUARIOS LOGUEADOS Y NO LOGUEADOS 
    if(loggedUser){
        var routes = 
        <Switch>
            <Route path="/cities" component={CiudadesARenderizar} />
            <Route path="/itineraries/:itinerary" component={Ciudad} /> 
            <Redirect to="/" />
        </Switch>
    }else if(localStorage.getItem('token')){
        //SI EXISTE UN TOKEN EN LOCALSTORAGE, EJECUTA UNA ACTION, QUE ENVÍA EL TOKEN AL BACK DONDE PASSPORT LA EVALUA
        logFromLocalStorage(localStorage.getItem('token'))
        .then(respuesta => {
            if(respuesta === false) setRecarga(!recarga)
        })
    } else{
        var routes = 
        <Switch> 
            <Route path="/cities" component={CiudadesARenderizar} />
            <Route path="/itineraries/:itinerary" component={Ciudad} /> 
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Redirect to="/" />
           
        </Switch>
    }
    return ( 
        <>             
            <BrowserRouter>  
                    <Route exact path="/" component= {Inicio} />         
                    {routes}                     
            </BrowserRouter>
        </>  
    )
    }

const mapStateToProps = state => {
    return{
        loggedUser: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    logFromLocalStorage: usersActions.logFromLocalStorage
}

    export default connect(mapStateToProps, mapDispatchToProps)(App)