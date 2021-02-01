import Carrusel from "./Carrusel"
import { Footer } from "./Footer"
import PortadaInicio from "./PortadaInicio"


//COMPONENTE PRINCIPAL DE LA PÁGINA "HOME"
const Inicio = () => {
    return(
        <>
            <PortadaInicio />
            <Carrusel />
            <Footer />
        </>
    )
}


export default Inicio