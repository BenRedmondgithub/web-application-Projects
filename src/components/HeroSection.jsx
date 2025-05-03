import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/path/to/your/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Removed duplicate key
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Ben Redmond Photography
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Capturing moments from today... Creating memories for a lifetime.
      </Typography>
      <Button
        component={Link}
        to="/portfolio"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3 }}
      >
        View Portfolio
      </Button>
    </Box>
  );
};

export default HeroSection;