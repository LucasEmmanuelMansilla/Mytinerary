import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Inicio from './components/Inicio'
import  Ciudad  from './components/Ciudad'
import CiudadesARenderizar from './components/CiudadesARenderizar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { connect } from 'react-redux';
import usersActions from './redux/actions/usersActions';

const App=  (props) => {
    
    const {loggedUser, logFromLocalStorage} = props 
    if(loggedUser){
        var routes = 
        <Switch>
            <Route path="/cities" component={CiudadesARenderizar} />
            <Route path="/itineraries/:itinerary" component={Ciudad} /> 
            <Redirect to="/" />
        </Switch>
    }else if(localStorage.getItem('token')){
        logFromLocalStorage(localStorage.getItem('name'), localStorage.getItem('token'), localStorage.getItem('profilePic'))
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