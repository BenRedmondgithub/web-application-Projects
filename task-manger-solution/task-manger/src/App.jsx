import React, { useState } from 'react'; // Add missing useState import
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Container, Typography, Button, TextField, List, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const App = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo) {
      console.log('New Todo:', newTodo);
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Task Manager
        </Typography>
        <form onSubmit={handleAddTodo} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <TextField
            label="New Todo"
            variant="outlined"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Todo
          </Button>
        </form>
        {/* Display the list of todos */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>

        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-label="mailbox folders"
        >
        <ListItem button></ListItem>
          <ListItemText primary="Todo List" /> 
        key={index}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
        
          {todos.map((todo, index) => (
            <ListItem key={index}>
              <ListItemText primary={todo} />
            </ListItem>
          ))}

        </List>

      </Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
// Export the App component as default
// This allows other files to import and use the App component
// without needing to specify the file name
// This is a common practice in React applications
// It helps keep the code organized and modular
// By exporting the App component, we can easily import it in other files
// and use it as needed
// This is especially useful for larger applications
// where we may have multiple components and files
export default App;