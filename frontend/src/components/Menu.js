import { NavLink } from 'react-router-dom'

const Menu = () => {
    return(
        <div className="menu">
            <img src="./assets/descarga.jpg" alt="foto" style={{
                width: '6vw',
                borderRadius: '5vw',
                }}/>
            <div> 
                <NavLink exact to="/"><button className="botones">Menu</button></NavLink>
                <NavLink to="/cities"><button className="botones">Cities</button></NavLink>
            </div>  
        </div>
    )
}


export default Menu