import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Inicio from './components/Inicio'
import  Ciudad  from './components/Ciudad'
import CiudadesARenderizar from './components/CiudadesARenderizar';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const App=  () => {
    return ( 
        <>             
            <BrowserRouter> 
                <Switch>  
                    <Route exact path="/" component= {Inicio} />
                    <Route path="/cities" component={CiudadesARenderizar} />
                    <Route path="/itineraries/:itinerary" component={Ciudad} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                    <Redirect to="/" />
                </Switch>            
            </BrowserRouter>
        </>  
    )
    }

    export default App