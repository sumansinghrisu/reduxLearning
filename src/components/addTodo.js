import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <>
            <div className='todo__form'>
                <div className='header'>Add Todo</div>
                <form onSubmit={addTodoHandler}>
                    <input
                        type='text'
                        value={input}
                        placeholder='Enter Text'
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo;