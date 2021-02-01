
import { Link } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import citiesActions from '../redux/actions/citiesActions'
import Itinerarios from './Itinerarios'
<<<<<<< HEAD:frontend/src/components/Ciudad.js
import { Footer } from './Footer'
=======
>>>>>>> 80530cf9c74f467d20ce57c6506f69b295f4b90c:frontend/src/components/ItinerarioIndividual.js

//COMPONENTE QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS

const Ciudad = (props) => {

    const { city, actionCity } = props

    const id = props.match.params.itinerary
   
   useEffect(() => {  
    actionCity(id)    
   }, [id, actionCity])

    return (
        <div key="itinerarie">                    
                <>
                    <Header />
                    {
                        city.map(({url, _id, name}) => {
                            return(
                                <div key={_id}style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}>               
                                    <div className="city" style={{backgroundImage: `url(${url})`}}>
                                        <h4 className="city">{name}</h4>
                                    </div>
                                    <Itinerarios id={id}/>
                                    <div className="itinerarioBotones" > 
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
                    <Footer />            
                 </>                  
        </div>
    )   
}

const mapDispatchToProps = {
    actionCity: citiesActions.cityPorId
}

const mapStateToProps = state => {
    return{
        city: state.citiesR.city
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ciudad)