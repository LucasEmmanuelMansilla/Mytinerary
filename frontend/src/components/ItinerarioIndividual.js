
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
//COMPONENTE FUNCIONAL QUE SIRVE PARA FILTRAR CADA UNO DE LOS ITINERARIOS A TRAVES DE LAS PROPS


const Itinerario = (props) => {

    const { individualCityAction, cityIndividual} = props

    const id = props.match.params.itinerary

    //FETCHEA LA DATA RECIBIDA DEL BACK. SI LOS IDs NO COINCIDEN, LO DEVUELVE A CITIES
    useEffect(() => {       
            individualCityAction(id)    
    }, [id, individualCityAction])

  
return (
     <div key="itinerarie">                    
                <>
                    <Header />
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80vh'}}>               
                        <div className="noItinerario" style={{backgroundImage: `url(${cityIndividual.url})`}}>
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

const mapDispatchToProps = {
    individualCityAction: citiesActions.citiIndependent,
}

const mapStateToProps = state => {
    return{
        cityIndividual : state.cityIndividual
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Itinerario)