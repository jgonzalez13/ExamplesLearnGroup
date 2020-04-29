import React, { useState, useEffect } from 'react'

const MiComponenteHijo = ({ fruta }) => {
  const [inputValue, setInputValue ] = useState("")

  useEffect(() => {
    /* Si el array esta vacio se va ejecutar el siguiente 
        codigo la primera vez quer se crea el componente +*/
    setInputValue(fruta)
  }, [])

  function onChange (event) {
    setInputValue(event.target.value)
  }

  return (
    <div>
      <li>{ inputValue }</li>
      <input value={inputValue} onChange={onChange} /> 
    </div>
  )
}

export default MiComponenteHijo
