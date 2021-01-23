import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

//COMPONENTE FUNCIONAL QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS


export const Itinerario = (props) => {
    
    const [city, setCity] = useState([])

  
const id = props.match.params.itinerary

    useEffect(() => {            
        fetch ('http://localhost:4000/api/city/'+id)
          .then(res => res.json())
          .then(data => setCity(data.respuesta))  
  
    }, [id])
  
return (
     <div key="itinerarie">                    
                <>
                    <Header />
                    <div>
                        <div className="imagenIndividual" style={{backgroundImage: `url(${city.url})`}}>
                            <p className="ciudadesItinerario" key={city._id} >{city.name}</p>
                        </div> 
                        <Link to="/">Home</Link>
                    </div> 
                 </>
                   
        </div>
    )
}
