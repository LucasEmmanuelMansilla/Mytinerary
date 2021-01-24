import React from 'react'

//SI SE INGRESA ALGO EN EL FILTRO QUE NO COINCIDA CON LOS NOMBRES DE LAS CIUDADES, SE MONTA ESTE COMPONENTE
export const CiudadNoEncontrada = () => {
    return (
        <div>
            <div className="ciudadNoEncontrada">
                <h6>Sorry, there are no cities with that name!</h6>
            </div>
        </div>
    )
}
