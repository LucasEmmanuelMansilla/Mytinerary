import '../styles/styles.css'

const ImgFondo = () => {
    return(
        <>
            <div className= "imgCentral" style={{
                backgroundImage: 'url("./assets/viajes_1200x800-1.jpg")'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100vw',
                        backgroundColor: 'rgb(26,61,126)'
                    }}>
                         <img src="./assets/MyTinerary.png" alt="foto" style={{
                            height: '20vh',
                            }} />
                
                    </div>
            </div>
        </>
    )
}

export default ImgFondo