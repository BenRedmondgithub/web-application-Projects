import React, { useState } from 'react';
import App from './App';
import { Container, Typography, Button, TextField, List, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    console.log('Deleted Todo:', todos[index]);
    setTodos(updatedTodos);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Material UI Todo App
      </Typography>
      <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          fullWidth
          label="New Todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </form>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTodo(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={todo} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default App;