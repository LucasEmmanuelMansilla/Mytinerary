import { NavLink } from 'react-router-dom'

const Direccionador = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
         <NavLink to="/cities">  
            <button className="imgDireccional">
                <p>Find your perfect trip, designed by insiders who know and love their cities</p>
                <img alt="foto" src="./assets/46476359-mapa-del-mundo-con-lupa-europa-en-foco-europa-en-crisis-financiera-y-económica.jpg" style={{
                    width: '15vw',
                    border: 'none',
                    borderRadius: '5vw'
                }}/>        
            </button>
        </NavLink> 
        
        </div>
    )
}


export default Direccionador