import React, { useState } from 'react'; // Added useState
import { useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import { Container, TextField, Button, Typography } from '@mui/material';

const AuthForm = ({ mode, setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/userdashboard'; // Default to '/userdashboard'

  const handleAuth = async () => {
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/${mode}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(`${mode} successful:`, data);

            localStorage.setItem('user', JSON.stringify(data.user));
            setIsAuthenticated(true);

            if (email === 'redmond.ben@live.ie') {
                navigate('/admindashboard');
            } else { 
                // Use the 'from' variable to redirect to the original location
                navigate(from);
            }
                

        } else {
            const errorData = await response.json();
            console.error('Error response:', errorData); // Debugging log
            alert(`${mode === 'signin' ? 'Signin' : 'Signup'} failed: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error(`${mode} error:`, error);
        alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ 
      mt: 10, 
      backgroundColor: 'white',}}>
      <Typography variant="h4" gutterBottom>
        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </Typography>

      <TextField 
        fullWidth 
        label="Email" 
        sx={{ mb: 2 }}
        onChange={e => setEmail(e.target.value)} 
      />
      
      <TextField 
        fullWidth 
        label="Password" 
        type="password" 
        sx={{ mt: 2 }} 
        onChange={e => setPassword(e.target.value)}
      />

      <Button variant="contained" sx={{ mt: 2 }} onClick={handleAuth}>
        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </Button>
    </Container>
  );
};

export default AuthForm;

