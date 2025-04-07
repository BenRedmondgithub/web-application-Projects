import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [isFirstImage, setIsFirstImage] = useState(true);

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

    const toggleImage = () => {
        setIsFirstImage(!isFirstImage);
    };

    <input
    type="text"
    value={input} // Controlled by the `input` state
    onChange={(e) => setInput(e.target.value)} // Updates the state on user input 
    />

    return (
        <div>
            <h1>Remember, do it for this gentle frog</h1>
            <img
                src={
                    isFirstImage
                        ? 'https://avatars.githubusercontent.com/u/73973708?v=4'
                        : 'https://upload.wikimedia.org/wikipedia/commons/2/29/Frog_dressed_as_gentleman_with_flowers%2C_top_hat_and_umbrella_Wellcome_V0050703_%28cropped%29.jpg'
                }
                alt="Frog"
                onClick={toggleImage}
            />
            <p>Click the frog for a cheeky surprise!</p>

            <h2>Todo List</h2>
            <p>Frog will help you</p>
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