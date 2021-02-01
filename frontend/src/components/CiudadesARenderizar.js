import Cudades from "./Ciudades"
import Header from "./Header"

//DEVUELVE AL DOM LAS CIUDADES CON ITINERARIOS
const CiudadesARenderizar = () =>{
return(
    <div className="paginaCities">
        <Header />
        <Cudades />    
    </div>
)

}

export default CiudadesARenderizar