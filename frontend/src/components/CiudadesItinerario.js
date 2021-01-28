import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import { CiudadFiltrada } from './CiudadFiltrada'
import { Filtro } from './Filtro'
import { Preloader } from './Preloader'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

//COMPONENTE PRINCIPAL DE LA PÁGINA "CITIES"
const CiudadesItinerario = (props) => {
    //CAPTURAN EL VALOR INGRESADO POR EL USUARIO EN EL FILTRO
    const [filtro, setFiltro] = useState("")
    
        //CAPTURA LAS PROPS
    const { totalCities, listaCities } = props
   useEffect(() => {
       totalCities()
   }, [totalCities])

    const filtrado = (e) => {
        setFiltro(e.target.value.toLowerCase().trim())
    }   
  
//SI EL FILTRO ESTÁ ACTIVADO, DEVUELVE SOLO LA CIUDAD ENCONTRADA, O UN CARTEL QUE DICE QUE NO HAY CIUDADES
   if(filtro.length > 0){
            return(
        <>
            <div className="cities">CITIES</div>
            <div style={{display: 'flex', justifyContent: 'center',}}><Filtro filtrado={filtrado}/></div>
            <CiudadFiltrada filtro={filtro} ciudadesIt={listaCities}/>
        </>
       )}else{
            if(listaCities.length === 0){
                return  <Preloader />
                }else{
                    return(
                        <>
                            <div className="cities">CITIES</div>
                            <div style={{display: 'flex', justifyContent: 'center',}}><Filtro filtrado={filtrado}/></div>
                            <div key="ciudadIt">
                                {listaCities.map(({name, url, _id}) => {      
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
}

const mapDispatchToProps = {  
     totalCities: citiesActions.totalCities   
}

const mapStateToProps = state => {
    return {
        listaCities: state.cities
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CiudadesItinerario)

   //EL LINK PLASMADO DE ESA MANERA VUELVE LA RUTA DINÁMICA, AL TOMAR UN VALOR DEPENDIENDO DEL
   //BOTÓN AL QUE SE LE HAGA CLICK. DE ESTA MANERA EL ITINERARIO INDIVIDUAL PUEDE SERVIRSE DE ESE NÚMERO
   //PARA SABER QUE CIUDAD DEBE RENDERIZAR
//SE DEBE CARGAR UNA ACTION DE REDUX PORQUE O SINO EL STATE NUNCA SE ACTUALIZA

            
           