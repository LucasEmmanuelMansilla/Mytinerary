import { NavLink } from 'react-router-dom'


const Logo = () => {
    return(         
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white'
        }}> 
            <div style={{display: 'flex'}}>
                <img src="./assets/pixlr-bg-result.png" style={{width: '8vw'}} alt="foto"/>
                <p className="textoHeader">MYTINERARY</p>
            </div>
            <div style={{display: 'flex',
                        margin: '0 2vw'}}>
                <NavLink exact to="/" className="navLink"><p className="botones">Menu</p></NavLink>
                <NavLink to="/cities" className="navLink"><p className="botones">Cities</p></NavLink>
            </div>
        </div>  
   
    )
}

export default Logo