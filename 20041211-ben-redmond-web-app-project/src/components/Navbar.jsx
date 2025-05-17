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
  { text: 'Explore', path: '/catalog' },
];

const Navbar = () => { 
  const [mobileOpen, setMobileOpen] = useState(false); 
  const isMobile = useMediaQuery('(max-width:1000px)'); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}> 
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
          <Typography 
            component={Link}
            to="/"
            variant="h4"
            color="inherit"
            noWrap
            sx={{
              mr: 2,
              fontFamily: "'Dancing Script', cursive",
            }}
          >
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
            <Box 
            sx={{ display: "flex", gap: 2,}}>
              {NavItems.map((item, index) => ( 
                <Button key={index} component={Link} to={item.path} variant="outlined" 
                sx={{ fontFamily: "'Reenie Beanie', cursive", 
                color: "black",
                fontSize: "1.3rem",
                }}>
                  {item.text}
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