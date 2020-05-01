import React from 'react'
import Task from './task'

const Tasks = ({ tasks, deleteTask, clearData }) => {
  return (
    <ul>
      {tasks.length > 0 ? (
        <>
          {
            tasks.map((task,i) => {
              return (
                <Task key={i} task={task} deleteTask={deleteTask} />
              )
            })
          }
          <li>
            <button onClick={clearData}>Clear Tasks</button>
          </li>
        </>
      ) : <div className="background-red">No hay Tareas</div>
    }
    </ul>
  )
}

export default Tasks