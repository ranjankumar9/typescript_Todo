import React, { useState } from 'react'
import { addTodos } from '../api';
import { Todo } from '../Utils';

interface TodoInputProp{
  onAdd: (a: Todo) => void;
}

const TodoInput = (prop: TodoInputProp) => {
  const {onAdd} = prop
  const [input,setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res = await addTodos(input)
    onAdd(res);
    setInput("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='What Needs to be done' style={{width:"500px", padding: "10px", fontFamily:'-moz-initial', fontSize:'18px', borderRadius:'50px'}} value={input} onChange={handleChange} />
        <button style={{width:"150px", padding: "12px",cursor: 'pointer', borderRadius:'50px', backgroundColor: 'red', color: 'white', fontSize: '18px'}}>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoInput;