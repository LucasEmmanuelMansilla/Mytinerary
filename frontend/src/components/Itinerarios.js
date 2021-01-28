import CiudadesItinerario from "./CiudadesItinerario"
import Header from "./Header"

//DEVUELVE AL DOM LAS CIUDADES CON ITINERARIOS
const Itinerarios = () =>{
return(
    <div className="paginaCities">
        <Header />
       <CiudadesItinerario />    
    </div>
)

}

export default Itinerarios