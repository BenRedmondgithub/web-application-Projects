import React from 'react'
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (

    <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            Ben Redmond Photography
          </Typography>
          <Box>
            <Button component={Link} to="/" color="inherit" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button component={Link} to="/portfolio" color="outlined" sx={{ mx: 1 }}>
              Portfolio
            </Button>
            <Button component={Link} to="/shop" variant="outlined" color="primary" sx={{ mx: 1 }}>
              Shop
            </Button>
            <Button component={Link} to="/Contact" variant="outlined" color="primary" sx={{ mx: 1 }}>
              Hire
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
