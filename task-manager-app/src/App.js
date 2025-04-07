import React, { useState } from 'react';
import './App.css';

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
      <header className="App-header">
        <h1>Task Manager App</h1>

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
    </div>
  );
}

export default App;