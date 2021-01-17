import '../styles/styles.css'
import Direccionador from './Direccionador'
import Header from './Header'


const PortadaInicio = () => {
    return(
        <>
            <div className= "imgCentral" style={{
                backgroundImage: 'url("./assets/intro-1494986335.jpg")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                }}>
                    <Header />
                    <Direccionador />
            </div>
        </>
    )
}

export default PortadaInicio