import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'



export const Itinerario = (props) => {
    
    const [cities, setCities] = useState([])
    
    useEffect(() => {     
        fetch ('../data.json')
          .then(res => res.json())
          .then(data => setCities(data.response))  
  
    }, [])
 
 const id = parseInt(props.match.params.itinerary)
 
    return (
        <div>                    
             {cities.map(city => {
                 if(parseInt(city._id) === id){
                     return(
                    <>
                        <Header />
                        <div>
                            <div className="botonItinerario" style={{backgroundImage: `url(${city.url})`}}>
                                <p className="ciudadesItinerario">{city.name}</p>
                            </div> 
                        </div> 
                    </>
                     ) 
                 }                                             
                }         
             )}                      
        </div>
    )
}
