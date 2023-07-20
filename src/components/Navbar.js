import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/6.png';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = [
  ["Home", "/"],
  ["Cart","/Cart"],
  ["Products","/ProductList"],
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
       <Typography color="black" fontSize={20}>SNIX</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink className="nav-link active" aria-current="page" to={item[1]}>
            <ListItem key={item[0]} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>{item[0]}</ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: 'transparent' }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", maxHeight: '65px', minHeight: '65px' }}>
          <Typography color="black" fontSize={20}>SNIX</Typography>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
                <NavLink to={item[1]}>
              <Button key={item[0]} sx={{fontWeight:'bold'}}>
                  {item[0]}
              </Button>
                </NavLink>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, width:'60px' }}></Box>
        </Toolbar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
