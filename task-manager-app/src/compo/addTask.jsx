import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function AddTask({ onAdd }) { 
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if (task.trim()) {
            onAdd(task);
            setTask("");
        }
    };

    return (
        <box display="flex" gap ={2} my={2}>
            <TextField
                fullWidth
                label="New Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                />
            <Button variant="contained" onClick={handleAdd}>
                Add
            </Button>

        </box>
    );
}