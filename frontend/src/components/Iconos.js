//TODOS LOS ÍCONOS DEL HEADER, INCLUSO EL LOGO
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import usersActions from '../redux/actions/usersActions';

const Iconos = (props) => {

const { loggedUser, logout} = props

    const [visible, setVisible] = useState(false)
    return (
        <div className="divLogos">
             <div style={{display: 'flex'}}>
                <img src="../assets/pixlr-bg-result.png" style={{width: '4vw'}} alt="foto"/>
                <p className="tituloPrincipal">MYTINERARY</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
               
                <div style={{width: '25vw'}}> 
                    <img src="../assets/3b21c7efd2ba9c119fb8d361acacc31d.png" className="logos" alt="foto"/>
                    <img src="../assets/584ac2d03ac3a570f94a666d.png" className="logos" alt="foto"/>
                    <img src="../assets/b1a3fab214230557053ed1c4bf17b46c-logotipo-del-icono-de-twitter-by-vexels.png" className="logos" alt="foto"/>
                </div>
                <button style={{border: 'none',height: '6vh', backgroundColor: 'rgba(0, 0, 0, 0)', width: '5vw',  outline: 'none'}} onClick={() => setVisible(!visible)}>
                       {loggedUser ? <img src={loggedUser.profilePic} alt="foto" style={{width: '5vw', borderRadius: '5vw', marginTop: '1vh'}}/> : <img src="../assets/descarga.png" alt="foto" style={{width: '3vw'}}/> } 
                        {visible && <>
                                      {loggedUser ? <div type='button' onClick={() => logout()} className="navLink" style={{fontSize: '1.5vw', display: 'block', color: 'black'}}>LogOut</div> :
                                      <>
                                        <Link to="/login" className="navLink" style={{fontSize: '1.5vw', display: 'block', color: 'white'}}>Login</Link>
                                        <Link to="/signup" className="navLink" style={{fontSize: '1.5vw', color: 'white'}}>Register</Link>
                                        </>
                                        }
                                    </>}
                </button>
            </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        loggedUser: state.userR.loggedUser
    }
}
const mapDispatchToProps = {
    logout: usersActions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Iconos)