
import { Link } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import Itinerarios from './Itinerarios'
import { Footer } from './Footer'

//COMPONENTE QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS

const Ciudad = (props) => {

    const { cities } = props

    const [ciudad, setCiudad] = useState([])
    const id = props.match.params.itinerary
   
   useEffect(() => {  
   setCiudad(cities.filter(city => city._id === id))    
   }, [id,])

    return (
        <div key="itinerarie">                    
                <>
                    <Header />
                    {ciudad.map(({name, url, _id}) =>
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
                    )}                                             
                    <Footer />            
                 </>                  
        </div>
    )   
}

const mapStateToProps = state => {
    return{
        cities: state.citiesR.cities
    }
}


export default connect(mapStateToProps)(Ciudad)