import React, { useState } from 'react'; // Added useState
import { useNavigate } from 'react-router-dom'; // Added useNavigate
import { Container, TextField, Button, Typography } from '@mui/material';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        const handleLogout = () => {
          localStorage.removeItem('user');
          navigate('/');
        }

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', data.username);
          navigate('/shop');
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>

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

export default Login;