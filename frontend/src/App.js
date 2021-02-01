import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Inicio from './components/Inicio'
import  Ciudad  from './components/Ciudad'
import CiudadesARenderizar from './components/CiudadesARenderizar';

const App=  () => {
    return ( 
        <>             
            <BrowserRouter> 
                <Switch>  
                    <Route exact path="/" component= {Inicio} />
                    <Route path="/cities" component={CiudadesARenderizar} />
                    <Route path="/itineraries/:itinerary" component={Ciudad} />
                    <Redirect to="/" />
                </Switch>            
            </BrowserRouter>
        </>  
    )
    }

    export default App