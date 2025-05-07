import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box, Drawer, IconButton, ListItem, ListItemText, List } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

const NavItems = [
  { text: 'Login', path: '/login' },
  { text: 'Sign-up', path: '/signup' },
  { text: 'Portfolio', path: '/portfolio' },
  { text: 'Hire Me', path: '/hireme' },
  { text: 'Shop', path: '/shop' },
  { text: 'Search', path: '/search' },
];

const Navbar = () => { // Wrap the component in a function
  const [mobileOpen, setMobileOpen] = useState(false); // Ensure this is inside the component
  const isMobile = useMediaQuery('(max-width:1000px)'); // Removed extra space in useMediaQuery

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}> {/* Fixed typo in 'amchor' */}
      <List>
        {NavItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component={Link} to="/" variant="h6" color="inherit" noWrap sx={{ mr: 2 }}>
            Ben Redmond Photography
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {NavItems.map((item, index) => ( // Fixed incorrect variable name 'navItems' to 'NavItems'
                <Button key={index} component={Link} to={item.path} variant="outlined">
                  {item.text} {/* Fixed incorrect property 'label' to 'text' */}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;