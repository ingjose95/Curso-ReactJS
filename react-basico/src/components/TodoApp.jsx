import React from 'react';
import UseTodos from '../hooks/useTodos';

const initialTodos = [

    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Django'}
]

export default function TodoApp() {

    const [todos, addTodos, deleteTodos] = UseTodos(initialTodos)

    return (
        <div>
            <button onClick={() => addTodos
            ({ title: 'Nueva tarea' })}>Add</button>
            <ul>
                { todos.map( todo => (

                    <li key={todo.id
                    }>{todo.title }
                        <button onClick={ () => deleteTodos(todo.id)}>Delete</button>
                    </li>
                ) ) }

                
            </ul>
        </div>
    )
}
