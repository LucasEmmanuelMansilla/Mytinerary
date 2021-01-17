import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Itinerario from './components/ItinerariosCiudades'
import Inicio from './components/Inicio'


const App=  () => {
    return ( 
        <>             
            <BrowserRouter> 
                <Switch>  
                    <Route exact path="/" component= {Inicio} />
                    <Route path="/cities" component={Itinerario} /> 
                </Switch>     
            </BrowserRouter>
        </>  
    )
    }

    export default App