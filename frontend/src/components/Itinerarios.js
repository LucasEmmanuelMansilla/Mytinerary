import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Itinerario from './Itinerario';

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
        itineraries.map(({itineraryTitle, hashtag, hours, likes, photoUser, price, userItinerary, activities, comments, _id}) => <Itinerario itineraryTitle={itineraryTitle} hashtag={hashtag} hashtag={hashtag} hours={hours} likes={likes} photoUser={photoUser} price={price} userItinerary={userItinerary} activities={activities} comments={comments} _id={_id} id={id}/>)
        }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        itineraries: state.itinerariesR.itineraries,
    }
}

const mapDispatchToProps = {
    actionItineraries: itinerariesActions.itineraries
}



export default connect(mapStateToProps, mapDispatchToProps)(Itinerarios)