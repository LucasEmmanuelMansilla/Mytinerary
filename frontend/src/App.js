import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Itinerarios from './components/Itinerarios'
import Inicio from './components/Inicio'
import { Itinerario } from './components/ItinerarioIndividual'


const App=  () => {
    return ( 
        <>             
            <BrowserRouter> 
                <Switch>  
                    <Route exact path="/" component= {Inicio} />
                    <Route path="/cities" component={Itinerarios} />
                    <Route path="/itineraries/:itinerary" component={Itinerario} />
                    <Redirect to="/" />
                </Switch>     
            </BrowserRouter>
        </>  
    )
    }

    export default App