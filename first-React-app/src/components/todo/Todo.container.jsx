import React, { useEffect, useState } from 'react'
import Tasks from './tasks'
import AddTask from './addTask'


const Todo = () => {
  const [todoData, setTodoData] = useState([])
  const [todoClass, setTodoClass] = useState("todoConatiner")
  const [tasksData, setTasksData] = useState([])
  const url = "https://jsonplaceholder.typicode.com"

  useEffect(() => {
      /* code here */
      if (todoData.length > 0) {
        setTodoClass("todoConatiner")
      }
  }, [todoData])

  useEffect(() => {
    getData()
  }, [])

  async function getData () {
    const response = await fetch(`${url}/users`)
    let data = await response.json();
    setTodoData(data)
  }

  function deleteTask (item) {
    const newTasksData = tasksData.filter(task => task !== item)
    setTasksData(newTasksData)
  }

  function addTask (newValue) {
    setTasksData([ ...tasksData, newValue ])
  }

  function clearData () {
    setTasksData([])
  }

  return (
    <div className={todoClass}>
      <h1>Todo List</h1>
      { todoData.length >0 ? todoData[0].name : "cargando" }
      <AddTask addTask={addTask} />
      <Tasks tasks={tasksData} deleteTask={deleteTask} clearData={clearData} />
    </div>
  )
}

export default Todo
