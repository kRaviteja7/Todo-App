import { useState } from 'react'
import './App.css'
import Inputfield from './cmponets/Inputfield'
import { Todo } from './model'
import Todolists from './cmponets/Todolists'

const App:React.FC = () => {
  const [todo,setTodo]=useState<string>('')
  const [todos,setTodos]=useState<Todo[]>([])

  const handleAdd=(e: React.FormEvent)=>{
    e.preventDefault()

    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <Todolists todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App

