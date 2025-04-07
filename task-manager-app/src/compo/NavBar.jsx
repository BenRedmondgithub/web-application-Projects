import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Line } from 'react-router-dom';

export default function NavBar() {
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Task Manager App
            </Typography>
            <Button color="inherit" component={Line} to="/">Home</Button>
            <Button color="inherit" component={Line} to="/about">About</Button>
        </Toolbar>
    </AppBar>
  );
}