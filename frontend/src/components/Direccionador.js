import { NavLink } from 'react-router-dom'

const Direccionador = () => {
    return(
        <div className="direccionador">
            <p className="textoPortada lets">Lets go now</p>
            <h2 className="textoPortada explore">Explore and Travel</h2>
            <h6 className="textoPortada find">Find your perfect trip, designed by insiders who know and love their cities.</h6>
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'}}>
                <NavLink to="/cities" className="navLink">  
                    <button className="botonView">VIEW MORE</button>
                </NavLink> 
            </div>
        
        </div>
    )
}


export default Direccionador