import React from 'react'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography component={Link} to="/" variant="h6" color="inherit" noWrap sx={{ mr: 2 }}>
              Ben Redmond Photography
            </Typography>
            <Button component={Link} to="/portfolio" color="outlined" sx={{ mx: 1 }}>
              Portfolio
            </Button>
            <Button component={Link} to="/shop" variant="outlined" sx={{ mx: 1 }}>
              Shop
            </Button>
            <Button component={Link} to="/HireMe" variant="outlined" sx={{ mx: 1 }}>
              Hire
            </Button>
          </Box>
          <Box>
            <Button component={Link} to="/login" color="outlined" sx={{ mx: 1 }}>
              login
            </Button>
            <Button component={Link} to="/signup" color="outlined" sx={{ mx: 1 }}>
              Sign-up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
