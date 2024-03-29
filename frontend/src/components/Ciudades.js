import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import  CiudadesFiltradas  from './CiudadesFiltradas'
import { Preloader } from './Preloader'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import { Footer } from './Footer'

//COMPONENTE PRINCIPAL DE LA PÁGINA "CITIES"
const Ciudades = (props) => {
    //CAPTURAN EL VALOR INGRESADO POR EL USUARIO EN EL FILTRO
    const [filtro, setFiltro] = useState("")
        //CAPTURA LAS PROPS
    const { totalCities, listaCities, filtroCities, } = props
   //LLAMA A LAS ACTIONS DE REDUX
   useEffect(() => {
       filtroCities(filtro)
       totalCities()
       window.scrollTo(0, 0)
   }, [totalCities, filtro, filtroCities])

    const filtrado = (e) => {
        setFiltro(e.target.value.toLowerCase().trim())
    }
          return(
            <>    
                <div className="cities">CITIES</div>
                <div style={{display: 'flex', justifyContent: 'center',}}>
                    <div className="filtro">
                        <input onChange={filtrado} type="text" name="filtro" autoComplete="off" placeholder="Search city by name"/>
                    </div>
                </div>
                {
                listaCities.length === 0 ? <Preloader /> : 
                        filtro.length === 0 ?
                        <>                                      
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
                            <Footer />  
                        </> : <CiudadesFiltradas /> 
                }  
            </>
                )
}
const mapStateToProps = state => {
    return {
        listaCities: state.citiesR.cities,
    }
}

const mapDispatchToProps = {
     totalCities: citiesActions.totalCities,
     filtroCities: citiesActions.filterCities,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ciudades)

   //EL LINK PLASMADO DE ESA MANERA VUELVE LA RUTA DINÁMICA, AL TOMAR UN VALOR DEPENDIENDO DEL
   //BOTÓN AL QUE SE LE HAGA CLICK. DE ESTA MANERA EL ITINERARIO INDIVIDUAL PUEDE SERVIRSE DE ESE NÚMERO
   //PARA SABER QUE CIUDAD DEBE RENDERIZAR
//SE DEBE CARGAR UNA ACTION DE REDUX PORQUE O SINO EL STATE NUNCA SE ACTUALIZA


