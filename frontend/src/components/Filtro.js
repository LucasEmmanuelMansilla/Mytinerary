import React from 'react'


export const Filtro = ({filtrado}) => {

    return (
        <div className="filtro">
           
           <input onChange={filtrado} type="text" name="filtro" autoComplete="off" placeholder="Search city by name"/>
        </div>
    )
}
