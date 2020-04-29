import React, { useState } from 'react'
import MiComponenteHijo from './MiComponenteHijo'

const MiprimerComponente = ({ color, name, message }) => {
  
  /*
    props.color - Tradicional

    const { color } = props - Destructuring
  */
  const [state, setState ] = useState('Valor Inicial')

  function onClick () {
   setState(message)
  }

// ! Javascript
  const frutas = ['Manzana', 'Naranja', 'Melon', 'Sandia']
  return (
    <div style={{ backgroundColor: color }}>
      <h2>{ name }</h2>
      <h3>{ state } </h3>
      <p>{`${frutas[0]} Es mi fruta favorita`}</p>
      <p>Este es mi primer componente</p>
      <p>Frutas:</p>
      <ul>
      {
        frutas.map((fruta, indice) => {
          return (
            <MiComponenteHijo key={indice} fruta={fruta} />
          )
        })
      }
      </ul>
      <button onClick={onClick}> Cambio </button>
    </div>
    )
  //! Html
}

export default MiprimerComponente
