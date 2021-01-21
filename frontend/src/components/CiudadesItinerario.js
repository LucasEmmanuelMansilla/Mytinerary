import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import { Filtro } from './Filtro'

//COMPONENTE QUE RENDERIZA LAS CIUDADES Y DEFINE LA RUTA DEL NAVEGADOR
export const CiudadItinerario = () => {


    const [filtro, setFiltro] = useState([])
   
    const filtrado = (e) => {
        setFiltro(e.target.value.toLowerCase())
    }

    const [ciudadesIt, setCiudadesIt] = useState([])

    useEffect(() => {
        fetch ('http://localhost:4000/api/cities')
          .then(res => res.json())
          .then(data => setCiudadesIt(data.respuesta))
    }, [])

   //EL LINK PLASMADO DE ESA MANERA VUELVE LA RUTA DINÁMICA, AL TOMAR UN VALOR DEPENDIENDO DEL
   //BOTÓN AL QUE SE LE HAGA CLICK. DE ESTA MANERA EL ITINERARIO INDIVIDUAL PUEDE SERVIRSE DE ESE NÚMERO
   //PARA SABER QUE CIUDAD DEBE RENDERIZAR 

    return (  
        <>    
        <Filtro filtrado={filtrado}/>
        <div key="ciudadIt" style={{height: '100vw'}}>
            {ciudadesIt.map(({name, url, _id, index}) => {
                if(name.toLowerCase().indexOf(filtro) === 0){
                    return (
                            <Link to={`/itineraries/${_id}`} key={_id} style={{textDecoration: 'none'}}>
                                <button className="botonItinerario" style={{backgroundImage: `url(${url})`}}>
                                    <p className="ciudadesItinerario" key={index}>{name}</p>
                                </button> 
                            </Link> 
                    )
                }else  {
                   return(
                    null
                   )
                      
                }                          
        } )
        }
        </div>
        </>
    )
}


            
           