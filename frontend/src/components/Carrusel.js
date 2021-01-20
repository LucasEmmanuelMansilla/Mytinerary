
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import CiudadCarrusel from './CiudadCarrusel';
import '../styles/styles.css'


class Carrusel extends Component {
  
  state = {
  
    items: [
      [ 
      {id: 1, url: 'atenas.jpg', ciudad: 'Athens'},
      {id: 2, url: 'barcelona.jpg', ciudad: 'Barcelona'},
      {id: 3, url: 'berna.jpg', ciudad: 'Bern'},
      {id: 4, url: 'Bruselas.jpg', ciudad: 'Brussels'}
    
    ],

    [
      {id: 5, url: 'dubai.jpg', ciudad: 'Dubai'},
      {id: 6, url: 'londres.jpg', ciudad: 'London'},
      {id: 7, url: 'madrid.jpg', ciudad: 'Madrid'},
      {id: 8, url: 'moscu.jpg', ciudad: 'Moscow'}
    ],
    [
      {id: 9, url: 'oslo.jpg', ciudad: 'Oslo'},
      {id: 10, url: 'Paris.jpg', ciudad: 'Paris'},
      {id: 11, url: 'roma.jpg', ciudad: 'Rome'},
      {id: 12, url: 'viena.jpg', ciudad: 'Vienna'}
    ]
    ]
  }


    
  render () { 
   const { items } = this.state
    
  return (  
      <div key="carrusel" >
        <h2 className="textoCarrusel" key="tituloCarrusel">Popular MYtineraries</h2>
        <Carousel>
            {items.map((ciudades) => <CiudadCarrusel ciudades={ciudades}/>)}
        </Carousel>)
      </div>
  )
}
}

export default Carrusel