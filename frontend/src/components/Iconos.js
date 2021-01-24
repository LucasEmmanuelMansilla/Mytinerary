//TODOS LOS ÍCONOS DEL HEADER, INCLUSO EL LOGO

const Iconos = () => {
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
                <button style={{border: 'none',height: '6vh', backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                        <img src="../assets/descarga.png" alt="foto" style={{width: '3vw'}}/>
                </button>
            </div>
    </div>
    )
}

export default Iconos