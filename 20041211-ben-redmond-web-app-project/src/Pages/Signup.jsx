import React, { useState } from 'react'; // Added useState
import { useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import { Container, TextField, Button, Typography } from '@mui/material';


const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  localStorage.setItem("user", JSON.stringify({ username }));
  setIsAuthenticated(true); // 🔥 React now knows we're logged in
  navigate(from);


  const from = location.state?.from?.pathname || '/'; 

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

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data)); // Store user data in localStorage
          navigate(from); // Redirect to the previous page
        } else if (response.status === 401) {
          alert('Invalid credentials. Please try again.');
        } else {
          alert('Login failed. Please try again later.');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    } else { 
      alert('Please enter both username and password.');
    }
  };

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

export default Signin;