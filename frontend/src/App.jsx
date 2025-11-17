import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'
import './App.css'

function App() {
  const [todo,setTodos]=useState([])

  return (
  <div>
   <CreateTodo></CreateTodo>
   <Todo ></Todo>
   </div>
  )
}

export default App 
