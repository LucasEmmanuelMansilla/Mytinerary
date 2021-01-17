const Ciudad = ({ciudades}) =>{
        return(
        ciudades.map(slides => {
            const ciudad = require(`../assets/${slides.url}`)
         
            return (           
                        <div key={slides.id} style={{
                                    backgroundImage: `url(${ciudad.default})`,
                                    backgroundSize: 'cover',     
                                    }} className="imagen">
                            <p className="ciudades">{slides.ciudad}</p>
                        </div>)                  
    }  
    ) 
    )
}
         
    export default Ciudad