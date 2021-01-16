import Header from './components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Itinerario from './components/ItinerariosCiudades'
import Inicio from './components/Inicio'



function App() {
    return ( 
        <>   
           
            <BrowserRouter> 
            <Header />
                <Switch>  
                    <Route exact path="/" component= {Inicio} />
                    <Route path="/cities" component={Itinerario} /> 
                </Switch>     
            </BrowserRouter>
        </>  
    )
    }

    export default App