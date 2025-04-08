// components/TaskList.jsx
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({ tasks, onDelete }) {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" onClick={() => onDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={task} />
        </ListItem>
      ))}
    </List>
  );
}