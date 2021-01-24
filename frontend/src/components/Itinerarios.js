import { CiudadItinerario } from "./CiudadesItinerario"
import Header from "./Header"

//DEVUELVE AL DOM LAS CIUDADES CON ITINERARIOS
const Itinerarios = () =>{
return(
    <div className="paginaCities">
        <Header />
       <CiudadItinerario />    
    </div>
)

}

export default Itinerarios