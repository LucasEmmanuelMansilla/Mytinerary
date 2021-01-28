import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiudadNoEncontrada } from './CiudadNoEncontrada'

export const CiudadFiltrada = ({filtro, ciudadesIt}) => {
    
    const [ciudadEncontrada, setCiudadEncontrada] = useState([])
    
    useEffect(() => {
        if(filtro){
            setCiudadEncontrada(ciudadesIt.filter(ciudad => ciudad.name.toLowerCase().indexOf(filtro, 0) === 0))      
        }
    }, [ciudadesIt,  filtro])

    if(ciudadEncontrada.length === 0){
        return <CiudadNoEncontrada />
    }else{
        return(
            <>
                <div>
                   {ciudadEncontrada.map(({name, url, _id}) =>{               
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
