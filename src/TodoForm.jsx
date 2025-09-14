import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

function TodoForm() {

    const [todoValue,setTodoValue] = useState('')
    const dispatch = useDispatch()

    const handleAddTodo = () =>{
       console.log(todoValue);
       setTodoValue('')
       dispatch(addTodo({
        title:todoValue
       }))
    }

  return (
    <div className='d-flex align-items-center justify-content center flex-column mt-5'>
         <h1>My Todo List</h1>
            <div className='mt-3 d-flex'>
                <input onChange={(event)=>setTodoValue(event.target.value)} type="text" className='form-control rounded-0 ' placeholder='Add a new todo..' />
                <button onClick={handleAddTodo} className='btn btn-primary rounded-0 ms-3'>Add</button>

            </div>
    </div>
  )
}

export default TodoForm