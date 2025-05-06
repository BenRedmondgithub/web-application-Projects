import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("Cart");
    setIsAuthenticated(false);
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
            (
              <>
                <Button component={Link} to="/login">Login</Button>
                <Button component={Link} to="/signup">Sign-up</Button>
                <Button component={Link} to="/portfolio">Portfolio</Button>
                <Button component={Link} to="/hireme">Hire Me</Button>
                <Button component={Link} to="/shop">Shop</Button>
                <Button component={Link} to="/portfolio">Portfolio</Button>
                <Button component={Link} to="/hireme">Hire Me</Button>
                <Button component={Link} to="/shop">Shop</Button>
                <Button onClick={handleLogout}>Logout</Button>
              </>
            )
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;