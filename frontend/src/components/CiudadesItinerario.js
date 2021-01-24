import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import { CiudadFiltrada } from './CiudadFiltrada'
import { Filtro } from './Filtro'
import { Preloader } from './Preloader'


//COMPONENTE PRINCIPAL DE LA PÁGINA "CITIES"
export const CiudadItinerario = () => {
    //CAPTURAN EL VALOR INGRESADO POR EL USUARIO EN EL FILTRO
    const [filtro, setFiltro] = useState([])
   
    const filtrado = (e) => {
        setFiltro(e.target.value.toLowerCase().trim())
    }
    //TOMA LO QUE LE ENVÍA EL BACK PARA PODER MAPEAR Y OBTENES LOS DATOS QUE NECESITA
    const [ciudadesIt, setCiudadesIt] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/cities')
          .then(res => res.json())
          .then(data => setCiudadesIt(data.res))
    }, [])

//SI EL FILTRO ESTÁ ACTIVADO, DEVUELVE SOLO LA CIUDAD ENCONTRADA, O UN CARTEL QUE DICE QUE NO HAY CIUDADES
   if(filtro.length > 0){
            return(
        <>
            <div className="cities">CITIES</div>
            <div style={{display: 'flex', justifyContent: 'center',}}><Filtro filtrado={filtrado}/></div>
            <CiudadFiltrada filtro={filtro} ciudadesIt={ciudadesIt}/>
        </>
       )}else{
            if(ciudadesIt.length === 0){
                return  <Preloader />
                }else{
                    return(
                        <>
                            <div className="cities">CITIES</div>
                            <div style={{display: 'flex', justifyContent: 'center',}}><Filtro filtrado={filtrado}/></div>
                            <div key="ciudadIt">
                                {ciudadesIt.map(({name, url, _id}) => {      
                                    return(
                                        <Link to={`/itineraries/${_id}`} key={_id} style={{textDecoration: 'none',}}>
                                            <button className="botonItinerario" style={{backgroundImage: `url(${url})`}}>
                                                <p className="ciudadesItinerario">{name}</p>
                                            </button> 
                                        </Link>
                                    )                             
                                })
                             }
                            </div>
                    </>
                    )
                }
                
   }
}

   //EL LINK PLASMADO DE ESA MANERA VUELVE LA RUTA DINÁMICA, AL TOMAR UN VALOR DEPENDIENDO DEL
   //BOTÓN AL QUE SE LE HAGA CLICK. DE ESTA MANERA EL ITINERARIO INDIVIDUAL PUEDE SERVIRSE DE ESE NÚMERO
   //PARA SABER QUE CIUDAD DEBE RENDERIZAR


            
           