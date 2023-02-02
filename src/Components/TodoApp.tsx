import React, { useEffect, useState } from 'react'
import { getTodos } from '../api'
import { Todo } from '../Utils'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'



const TodoApp = () => {
  
  const [change, setChange] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])

  const onAdd = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  const onUpdate = () => {
    setChange(prev => !prev)
  }

  const onDelete = () => {
    getTodos().then((res) => {
      setTodos(res)
    })
  }

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res)
    })
  },[change])

  return (
    <div>
      <p style={{fontSize: "50px",fontFamily: "initial", fontWeight: "bold"}}>Todos</p>
      <TodoInput onAdd={onAdd}/>
      {todos?.map((item) => {
        return <TodoItem key={item.id} {...item} onUpdate = {onUpdate} onDelete={onDelete}/>
      })}
    </div>
  )
}

export default TodoApp