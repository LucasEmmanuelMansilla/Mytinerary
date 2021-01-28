
import { Link } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

//COMPONENTE QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS

const Itinerario = (props) => {

    const { cities } = props

    const [ciudadIndividual, setCiudadIndividual] = useState([])
    const id = props.match.params.itinerary
   useEffect(() => {    
       setCiudadIndividual(cities.filter(city => city._id === id))
   }, [cities, id])

    return (
        <div key="itinerarie">                    
                <>
                    <Header />
                    {
                        ciudadIndividual.map(({url, _id}) => {
                            return(
                                <div key={_id}style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80vh'}}>               
                                    <div className="noItinerario" style={{backgroundImage: `url(${url})`}}>
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
                            )
                        })
                    }             
                 </>                  
        </div>
    )   
}

const mapStateToProps = state => {
    return{
        cities : state.cities
    }
}

export default connect(mapStateToProps)(Itinerario)