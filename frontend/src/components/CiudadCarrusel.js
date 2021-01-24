
//MAPEA EL EL ARRAY DE ARRAY CON LAS CIUDADES Y LAS DEVUELVE AL CARRUSEL

const CiudadCarrusel = ({ciudades}) =>{
        return(
        ciudades.map(slides => {
            const ciudad = require(`../assets/${slides.url}`)
         
            return (           
                        <div key={slides.id} style={{
                                    backgroundImage: `url(${ciudad.default})`,
                                    backgroundSize: 'cover',     
                                    }} className="imagenCarrusel">
                            <p className="ciudadesCarrusel" key={slides.ciudad}>{slides.ciudad}</p>
                        </div>)                  
    }  
    ) 
    )
}
         
    export default CiudadCarrusel