import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // if you're using React Router DOM

const Login = () => {
  const [username, setUsername] = React.useState('');
  const password = ''; // Define or initialize the password variable
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogin = () => {
    // Define the handleLogin function logic
    console.log('Login function executed');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
      <TextField fullWidth label="Username" onChange={e => setUsername(e.target.value)} />
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>Login</Button>
      </form>
    </Container>
  );
};

export default Login;
