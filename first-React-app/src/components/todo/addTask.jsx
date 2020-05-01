import React, { useState } from 'react'

const AddTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("")

  function onChangeValue(event) {
    setInputValue(event.target.value)
  }

  function addTaskValue (event) {
    event.preventDefault()
    addTask(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={addTaskValue} className="background-white">
      <input value={inputValue} onChange={onChangeValue}/>
      {/* <button onClick={addTaskValue}>ADD</button> */}
      <input type="submit" value="ADD"/>
    </form>
  )
}

export default AddTask
