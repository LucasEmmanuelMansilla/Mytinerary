import { NavLink } from 'react-router-dom'


const BotonesNav = () => {
    return(         
            <div style={{display: 'flex',
                        margin: '1vw 2vw',}}>
                <NavLink exact to="/" className="navLink"><p className="botones"><i className="fas fa-home"></i> Home</p></NavLink>
                <NavLink to="/cities" className="navLink"><p className="botones"><i className="fas fa-city"></i> Cities</p></NavLink>
            </div>
            )
}

export default BotonesNav