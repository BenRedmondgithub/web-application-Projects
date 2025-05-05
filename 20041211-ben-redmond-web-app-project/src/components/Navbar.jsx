import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null; // Safely parse user data
    } catch {
      return null; // Return null if parsing fails
    }
  })();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Cart");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component={Link} to="/" variant="h6" color="inherit" noWrap sx={{ mr: 2 }}>
            Ben Redmond Photography
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
          {!user ? (
            <>
              <Button component={Link} to="/login" color="inherit" sx={{ mx: 1 }}>
                Login
              </Button>
              <Button component={Link} to="/signup" variant="outlined" sx={{ mx: 1 }}>
                Sign-up
              </Button>
              <Button component={Link} to="/portfolio" variant="outlined" sx={{ mx: 1 }}>
                Portfolio
              </Button>
              <Button component={Link} to="/hireme" variant="outlined" sx={{ mx: 1 }}>
                Hire Me
              </Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/search" variant="outlined" sx={{ mx: 1 }}>
                Search
              </Button>
              <Button component={Link} to="/shop" variant="outlined" sx={{ mx: 1 }}>
              Shop
              </Button>
              <Button onClick={handleLogout} color="inherit" sx={{ mx: 1 }}>
                Logout
              </Button>
            </>
          )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
