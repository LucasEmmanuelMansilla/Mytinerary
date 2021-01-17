
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import Ciudad from './Ciudades';
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
      {id: 1, url: 'dubai.jpg', ciudad: 'Dubai'},
      {id: 2, url: 'londres.jpg', ciudad: 'London'},
      {id: 3, url: 'madrid.jpg', ciudad: 'Madrid'},
      {id: 4, url: 'moscu.jpg', ciudad: 'Moscow'}
    ],
    [
      {id: 1, url: 'oslo.jpg', ciudad: 'Oslo'},
      {id: 2, url: 'Paris.jpg', ciudad: 'Paris'},
      {id: 3, url: 'roma.jpg', ciudad: 'Rome'},
      {id: 4, url: 'viena.jpg', ciudad: 'Vienna'}
    ]
    ]
  }


    
  render () { 
   const { items } = this.state
    
  return (  
      <div key="carrusel">
        <h2 className="textoCarrusel" key="tituloCarrusel">Popular MYtineraries</h2>
        <Carousel key="carousel">
            {items.map((ciudades) => <Ciudad ciudades={ciudades}/>)}
        </Carousel>)
      </div>
  )
}
}

export default Carrusel