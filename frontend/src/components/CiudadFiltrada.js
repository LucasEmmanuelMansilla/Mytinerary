import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiudadNoEncontrada } from './CiudadNoEncontrada'
import {connect} from 'react-redux'

const CiudadFiltrada = (props) => {
    
    const [ciudadEncontrada, setCiudadEncontrada] = useState([])
    const {citiesFiltradas} = props
    useEffect(() => {
        setCiudadEncontrada(citiesFiltradas)
    }, [citiesFiltradas])

    if(ciudadEncontrada.length === 0){
        return <CiudadNoEncontrada />
    }else{
        return( 
            <>
                <div>
                   {ciudadEncontrada.map(({name, url, _id}) =>{               
                               return(
                                <Link to={`/itineraries/${_id}`} key={_id} style={{textDecoration: 'none',}}>
                                    <button className="botonItinerario" style={{backgroundImage: `url(${url})`}}>
                                        <p className="ciudadesItinerario">{name}</p>
                                    </button> 
                                </Link>
                               )                       
                    })                     
                   }     
                </div>
            </>       
        )
    }
       
}

const mapStateToProps = state => {
    return {
        citiesFiltradas: state.citiesFiltradas
    }
}


export default connect(mapStateToProps)(CiudadFiltrada)
