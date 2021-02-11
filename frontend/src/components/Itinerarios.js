import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import { Actividades } from './Actividades';

const Itinerarios = (props) => {  
    const { actionItineraries, id, itineraries, like, dislike, loggedUser } = props
   
    useEffect(() => {
        actionItineraries(id)
       window.scrollTo(0, 0)
    }, [])
   
    const likear = async () => {
        like({itineraryId: props.itineraries[0]._id, token: loggedUser.token,
        id})
    }

    const dislikear = async () => {
        dislike({
            itineraryId: props.itineraries.map(({_id}) => _id), 
            token: loggedUser.token,
        id})
    }
   

    return (
        <div>
           {itineraries.length === 0 ? <div>
            <div className="ciudadNoEncontrada">
                <h6>City ​​without itineraries yet. Create yours!</h6>
            </div>
        </div> : 
        itineraries.map(({itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities, comments, _id}) => { 
           
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
                                    {
                                    loggedUser ? 
                                    likes.find(likeUsuario => likeUsuario === loggedUser.id) ? 
                                    <button className="likes" onClick={dislikear}><i className="fas fa-thumbs-up">{likes.length}</i></button> : 
                                    <button className="likes" onClick={likear}><i className="far fa-thumbs-up">{likes.length}</i></button> : 
                                    <button className="likes" onClick={alert("hola")}><i className="far fa-thumbs-up">{likes.length}</i></button> }
                                                                                                
                                </div>
                                <div className="hoursPrice">
                                    <p>Duration {hours}hs</p>
                                    <div>{Array(price).fill(<i className="fas fa-money-bill-alt" style={{color: '#0E6D14', }}></i>)}</div>                        
                                </div>                
                            </div>
                           
                        </div>
                    </div> 
                    <Actividades activities={activities} comments={comments} idCiudad={id} id={_id} />             
                </div>
            )
        })
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        itineraries: state.itinerariesR.itineraries,
        loggedUser: state.userR.loggedUser
    }
}

const mapDispatchToProps = {
    actionItineraries: itinerariesActions.itineraries,
    like: itinerariesActions.likeItinerary,
    dislike: itinerariesActions.dislikeItinerary
}



export default connect(mapStateToProps, mapDispatchToProps)(Itinerarios)