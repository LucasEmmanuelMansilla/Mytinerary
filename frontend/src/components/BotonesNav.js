import { NavLink } from 'react-router-dom'


const BotonesNav = () => {
    return(         
            <div style={{display: 'flex',
                        padding: '1vw 2vw',
                        backgroundColor: 'rgba(0, 0, 0, 0.555)'}}>
                <NavLink exact to="/" className="navLink"><p className="botonesNav"><i className="fas fa-home"></i> Home</p></NavLink>
                <NavLink to="/cities" className="navLink"><p className="botonesNav"><i className="fas fa-city"></i> Cities</p></NavLink>
            </div>
            )
}

export default BotonesNav