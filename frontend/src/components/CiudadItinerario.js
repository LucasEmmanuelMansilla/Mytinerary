import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

export const CiudadItinerario = () => {
    const [ciudadesIt, setCiudadesIt] = useState([])

    useEffect(() => {
        fetch ('../data.json')
          .then(res => res.json())
          .then(data => setCiudadesIt(data.response))
            

    }, [])
   
    return (      
        <div>
            {ciudadesIt.map(({name, url, _id}) => {
                return(
                       <Link to={`/itineraries/${_id}`} key={_id} style={{textDecoration: 'none'}}>
                            <button className="botonItinerario" style={{backgroundImage: `url(${url})`}}>
                                <p className="ciudadesItinerario">{name}</p>
                            </button> 
                        </Link>                   
                    )
            })}
        </div>
    )
}