import '../styles/styles.css'
import Direccionador from './Direccionador'

const FotoPortada = () => {
    return(
        <>
            <div className= "imgCentral" style={{
                backgroundImage: 'url("./assets/skiing-slider-img-1.jpg")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover'
                }}>
                   <Direccionador />
            </div>
        </>
    )
}

export default FotoPortada