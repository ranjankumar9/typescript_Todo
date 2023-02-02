import React from 'react'
import { deleteTodo, toggleTodo } from '../api'
import { Todo } from '../Utils'

interface ItemProps extends Todo {
  onUpdate: () => void;
  onDelete: () => void;
}

const TodoItem = ({id, title, status, onUpdate, onDelete}: ItemProps) => {
  
  const handleToggle = () => {
    toggleTodo(id,!status).then(() => {
      onUpdate()
    })
    
  }

  const handleDelete= () => {
    deleteTodo(id).then(() => {
      onDelete()
    })
  }
  
  return (
    <div style={{fontSize: "28px", border: "4px solid red", width: "38%", margin: "auto", padding: "10px", marginTop: "10px",borderRadius: '20px'}}>
      <p>
        {title} - {status? "Completed" : "Pending"}
      </p>
      <button onClick={handleToggle}>Toggle Status</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default TodoItem;