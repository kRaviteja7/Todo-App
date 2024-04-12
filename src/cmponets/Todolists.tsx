import React from 'react'
import './input.css'
import { Todo } from '../model'
import Singletodo from './Singletodo'

interface Props{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolists: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
        {
            todos.map((todo)=>(
                <Singletodo
                    key={todo.id} todo={todo} todos={todos} setTodos={setTodos}
                />
            ))
        }
    </div>
  )
}

export default Todolists