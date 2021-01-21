import '../styles/styles.css'
import Direccionador from './Direccionador'
import Header from './Header'


const PortadaInicio = () => {
    return(
        <>
            <div className= "imgCentral" style={{
                backgroundImage: 'url("./assets/Turismo.jpg")',
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