import React, { useState } from 'react'

export const Actividades = (props) => {
    //CARGA LAS ACTIVIDADES DE LOS ITINERARIOS
    const [visible, setVisible] = useState(false)

    const { activities } = props

    return (
        <>
            {visible && 
            <div className="activities">             
                {activities.map(({imageActivity, titleActivity, _id}) => { 
                    return(
                        <div className="prueba" key={_id}>
                            <img src={imageActivity} alt="actividades"/>
                            <p>{titleActivity}</p>                              
                        </div>                                
                )                   
                })}
            </div>
                } 
            <div style={{display: 'flex', justifyContent: 'center', margin: '2vh 0'}}>
                <button className="botonView btnItinerary" onClick={() => setVisible(!visible)}>{!visible ? 'View More' : 'View Less'}</button>
            </div>
        </>
    )
}
