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
                        : 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/468335868_592496053237657_1417946603696020450_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=PHJgzaDWmK8Q7kNvgGs6NLv&_nc_oc=Adm8i87XEC41gzzmykjaFl4g-8h7tm_S9vkLJ2k15d30iUBV3JCLhHlSK2WnHqugUV0&_nc_zt=23&_nc_ht=scontent-dub4-1.xx&_nc_gid=hcqT26VPA7PeI7Ifs8HOfg&oh=00_AYHv08_4vk2N9dX1BTME8nCASBHHaxk8jo7TBJXdWvzMnA&oe=67F22DC8'
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