import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import AddTask from '../compo/addTask';
import TaskList from '../compo/taskList';

export default function Home() { 
    const [tasks, setTasks] = useState([]);
    const handleAdd = (task) => {setTasks([...tasks, task]);
    const handleDelete = (index) => {
        const updated = [...tasks];
        updated.splice(index, 1);
        setTasks(updated);
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Task Manager App
            </Typography>
            <AddTask onAdd={handleAdd} />
            <TaskList tasks={tasks} onDelete={handleDelete}/>
        </Container>
    );

    };
    
}  
