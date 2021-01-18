import '../styles/styles.css'
import Direccionador from './Direccionador'
import Header from './Header'


const PortadaInicio = () => {
    return(
        <>
            <div className= "imgCentral" style={{
                backgroundImage: 'url("./assets/1582318987_encuentros_viajeros_barcelona_2_.jpg")',
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