import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data));
          setIsAuthenticated(true); // Ensure this is properly passed and used
          navigate(from);
        } else {
          alert('Invalid credentials.');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred.');
      }
    } else {
      alert('Please enter both fields.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField fullWidth label="Username" sx={{ mb: 2 }} onChange={e => setUsername(e.target.value)} />
      <TextField fullWidth label="Password" type="password" sx={{ mt: 2 }} onChange={e => setPassword(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;