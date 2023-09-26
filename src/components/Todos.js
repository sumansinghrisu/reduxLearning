import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../app/features/todo/todoSlice';
function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="todo-list">
                <h2>Todos List</h2>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <h1>{todo.text}</h1>
                            <span className="delete-icon" onClick={() => dispatch(removeTodo(todo.id))}>×</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos;