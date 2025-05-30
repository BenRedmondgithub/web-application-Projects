import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [input, setInput] = useState(''); // State to track input field

  // Function to handle adding a task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent adding empty tasks
    setTasks([...tasks, input]); // Add new task to the list
    setInput(''); // Clear the input field
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Task Manager</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <header className="App-header">
          <h1>Task Manager App</h1>

          <p>Manage your tasks efficiently!</p>

          <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/34246/images/2VUiCqzASBqK3hIw7mag_Note-taking.jpg" alt="Task Manager" />

          {/* Task Input Form */}
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
          </form>

          {/* Task List */}
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </header>
      </Router>
    </div>
  );
}

export default App;