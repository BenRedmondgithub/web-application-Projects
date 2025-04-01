import React, { useState } from 'react';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, input]);
        setInput('');
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const handleDeleteTodos = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleDone = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <div>
            <h2>Todo App</h2>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;