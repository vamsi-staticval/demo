import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuBar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
      allowedRoles: ['admin', 'user', 'manager'],
    },
    {
      key: 'users',
      label: 'User Management',
      path: '/users',
      allowedRoles: ['admin'],
    },
    {
      key: 'buddies',
      label: 'Buddy Management',
      path: '/buddies',
      allowedRoles: ['admin', 'manager'],
    },
    {
      key: 'reports',
      label: 'Reports',
      path: '/reports',
      allowedRoles: ['admin', 'manager'],
    },
  ];

  const hasAccess = (allowedRoles) => {
    return allowedRoles.includes(user?.role);
  };

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {menuItems.map((item) => (
        //hasAccess(item.allowedRoles) && (
        <Button
          key={item.key}
          color='inherit'
          onClick={() => handleMenuClick(item.path)}
          sx={{ mr: 2 }}
        >
          {item.label}
        </Button>
        //),
      ))}
    </>
  );
};

export default MenuBar;
