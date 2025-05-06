import React from 'react';
import { Typography, Button, AppBar, Toolbar, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appName = process.env.REACT_APP_APPNAME || 'Staticval';

  return (
    <AppBar position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <img
            src='../../logo192.png'
            alt='Logo'
            style={{ height: '40px', marginRight: '10px' }}
          />
          <Typography variant='h6'>{appName}</Typography>
        </Box>
        {location?.pathname !== '/signin' && (
          <Button color='inherit' onClick={() => navigate('/signin')}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
