import React from 'react'

const Task = ({ task, deleteTask }) => {

  function deleteButonTask () {
    deleteTask(task)
  }

  return (
    <>
    <li className="itemLi" >
      <span>{ task }</span>
      <button onClick={deleteButonTask} className="deleteUser center">X</button>
    </li>
    <hr />
    </>
  )
}

export default Task
