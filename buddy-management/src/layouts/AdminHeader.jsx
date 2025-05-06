import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from '@mui/material';
import { logout } from '../utils/logout';
import { useSelector } from 'react-redux';
import MenuBar from './Menu';

const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const resp = await logout();
    if (resp?.success) {
      handleMenuClose();
      navigate('/signin');
    }
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <Box
          component='div'
          className='flex items-center cursor-pointer mr-12'
          onClick={() => navigate('/dashboard')}
        >
          <Typography variant='h6'>ABC School</Typography>
        </Box>
        <Box component='div' className='flex flex-1 items-center'>
          <MenuBar />
        </Box>
        <IconButton onClick={handleMenuOpen} color='inherit'>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            {user?.user?.email?.charAt(0)?.toUpperCase()}
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem disabled>{user?.user?.email}</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
