// pages/Home.jsx
import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (task) => setTasks([...tasks, task]);
  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <Container>
      <Typography variant="h4" my={2}>My Tasks</Typography>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </Container>
  );
}