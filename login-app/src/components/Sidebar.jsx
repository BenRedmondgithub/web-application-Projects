import React from 'react'
import { Drawer, ListItem, ListItemText } from '@mui/material'

const Sidebar = ({ open, onClose }) => {

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
        <list sx={{ width: 250}}>
        <ListItem button onClick={onClose}>
            <ListItemText primary="Close" />
        </ListItem>
        <ListItem button onClick={() => {
            localStorage.removeItem('user')
            window.location.href = '/'
        }}>
        <ListItemText primary="Logout" />
        
        </ListItem>
        </list>
    </Drawer>
  );
};

export default Sidebar;