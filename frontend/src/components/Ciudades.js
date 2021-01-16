const Ciudad = ({ciudades}) =>{
        return(
        ciudades.map(slides => {
            const ciudad = require(`../assets/${slides.url}`)
         
            return (           
                        <div key={slides.id} style={{
                                    backgroundImage: `url(${ciudad.default})`,
                                    width: '35vw',
                                    height: '40vh',
                                    margin: '1vh 1vw', 
                                    backgroundSize: 'cover',
                                    borderRadius: '3vw'        
                        }} className="imagen"><p className="ciudades">{slides.ciudad}</p></div>)                  
    }  
    ) 
    )
}
         
    export default Ciudad