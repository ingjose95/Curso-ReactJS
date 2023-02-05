import { useState } from 'react';

const UseTodos = (initialTodos) => {

    const [todos, setTodos] = useState(initialTodos);

    const addTodos = (newTodo) => {

        newTodo.id = Date.now();
        setTodos([
            ...todos,
            newTodo
        ])

    }


    const deleteTodos = (todoID) => {

        setTodos(todos.filter(todo => todo.id !== todoID))

    }

    return [

        todos,
        addTodos,
        deleteTodos,
    ]
}

export default UseTodos;
