import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        textAlign: 'center',
      }}
    >
      <Typography variant='body2' color='text.secondary'>
        © {new Date().getFullYear()} Staticval. All rights reserved.
      </Typography>
    </Box>
  );
};
export default Footer;
