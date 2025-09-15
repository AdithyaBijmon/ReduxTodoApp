import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';

function TodoForm() {
    const [inputTodo,setInputTodo] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todo)

    useEffect(()=>{
        sessionStorage.setItem("AllTodos",JSON.stringify(todos))
    },[todos])

    const handleAddTodo = () =>{
       if(inputTodo){
         dispatch(addTodo(inputTodo))
         setInputTodo('')

        console.log(todos)
       }
       else{
        alert('Provide your todo please!')
       }
       
    }

  return (
    <div className='d-flex align-items-center justify-content center flex-column mt-5'>
         <h1>My Todo List</h1>
            <div className='mt-3 d-flex'>
                <input onChange={e=>setInputTodo({...inputTodo,title:e.target.value})}  type="text" className='form-control rounded-0 ' placeholder='Add a new todo..' />
                <button onClick={handleAddTodo} className='btn btn-primary rounded-0 ms-3'>Add</button>

            </div>
    </div>
  )
}

export default TodoForm