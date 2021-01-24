import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

//COMPONENTE FUNCIONAL QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS


export const Itinerario = (props) => {
    
    const [city, setCity] = useState([])

    const id = props.match.params.itinerary

    //FETCHEA LA DATA RECIBIDA DEL BACK. SI LOS IDs NO COINCIDEN, LO DEVUELVE A CITIES
    useEffect(() => {            
        fetch ('http://localhost:4000/api/city/'+id)
          .then(res => res.json())
          .then(data => {
              if(data.success === true){
                  setCity(data.respuesta)
              }else{
                  window.location.href = 'http://localhost:3000/cities'
              }
          }) 
        
  
    }, [id])
  
return (
     <div key="itinerarie">                    
                <>
                    <Header />
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80vh'}}>               
                        <div className="noItinerario" style={{backgroundImage: `url(${city.url})`}}>
                             <h4 className="sinItinerario">City ​​without itineraries yet. Create yours!</h4>
                        </div>
                        <div className="noItinerarioBotones" > 
                            <Link to="/" className="navLink ciudad"><i className="fas fa-home"></i>Home</Link>
                            <Link to="/cities" style={{display: 'flex', alignItems: 'center', margin:'0 0 0 6vw'}} className="navLink ciudad">
                                <img src="../assets/32170.png" style={{ width: '3vw', margin: '0 1vw 0 0'}} alt="foto"/>
                                <p>Back to cities</p>
                            </Link>
                        </div>                   
                    </div> 
                 </>
                   
        </div>
    )
}
