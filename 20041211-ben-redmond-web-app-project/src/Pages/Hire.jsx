import React, { useState } from 'react'; // Added useState
import { useNavigate } from 'react-router-dom'; // Added useNavigate
import { Container, TextField, Button, Typography } from '@mui/material'; // Add MenuItems, Stack tomorrow!!!
//import {AdepterDateFns} from "@mui/x-date-pickers/AdapterDateFns"


const HireMe = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('user', username);
      navigate('/shop');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Hire Me</Typography>

      <TextField 
      fullWidth 
      label="Username" 
      sx={{ mb: 2}}
      onChange={e => setUsername(e.target.value)} 
      />
      
      <TextField 
        fullWidth 
        label="Password" 
        type="password" 
        sx={{ mt: 2 }} 
        onChange={e => setPassword(e.target.value)}
      />

      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default HireMe;
