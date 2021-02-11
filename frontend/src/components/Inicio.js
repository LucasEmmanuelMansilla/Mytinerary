import { useEffect } from "react"
import Carrusel from "./Carrusel"
import { Footer } from "./Footer"
import PortadaInicio from "./PortadaInicio"


//COMPONENTE PRINCIPAL DE LA PÁGINA "HOME"
const Inicio = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return(
        <>
            <PortadaInicio />
            <Carrusel />
            <Footer />
        </>
    )
}


export default Inicio