import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { Actividades } from './Actividades';

const Itinerarios = (props) => {

    const { actionItineraries, id, itineraries } = props

    useEffect(() => {
        actionItineraries(id)
       window.scrollTo(0, 0)
    }, [])
    return (
        <div>
           {itineraries.length === 0 ? <div>
            <div className="ciudadNoEncontrada">
                <h6>City ​​without itineraries yet. Create yours!</h6>
            </div>
        </div> : 
        itineraries.map(({itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities}) => { 
            return(
                <div key={itineraryTitle} className="itinerario"> 
                    <p className="tituloItinerario">{itineraryTitle}</p>
                    <div style={{display: 'flex'}}>
                        <div className="datosUsuario">
                            <div className="userItinerary" style={{backgroundImage: `url(${photoUser})`}}></div>
                            <p style={{fontSize: '2vw'}}>{userItinerary}</p>               
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around',}}>
                            <div className="datosAdicionales">
                                <div style={{margin: '0 2vw', width: '50vw'}}>
                                    <div>{hashtag.map(tag => <span key={tag} style={{marginRight: '1vw', color: 'blue', width: '100%'}}>{tag}</span> )}</div>  
                                    <p><i className="fas fa-thumbs-up"></i>{likes}</p>                                                              
                                </div>
                                <div className="hoursPrice">
                                    <p>Duration {hours}hs</p>
                                    <div>{Array(price).fill(<i className="fas fa-money-bill-alt" style={{color: '#0E6D14', }}></i>)}</div>                        
                                </div>                
                            </div>
                           
                        </div>
                    </div>
                    <Actividades activities={activities} />                            
                </div>
            )
        })
        }
        </div>
    )
}

const mapDispatchToProps = {
    actionItineraries: itinerariesActions.itineraries
}

const mapStateToProps = state => {
    return {
        itineraries: state.itinerariesR.itineraries
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerarios)