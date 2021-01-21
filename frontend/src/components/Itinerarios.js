import { CiudadItinerario } from "./CiudadesItinerario"
import Header from "./Header"

const Itinerarios = () =>{
return(
    <div style={{ backgroundColor: 'rgb(1,131,139)', padding: '0 0 2vw 0', height: '100%'}}>
        <Header />
        <CiudadItinerario />
    </div>
)

}

export default Itinerarios