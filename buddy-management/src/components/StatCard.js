import React from 'react';
import { Box, Typography } from '@mui/material';

const StatCard = ({ title, count, bgColor }) => (
  <Box
    sx={{
      p: 3,
      borderRadius: 2,
      backgroundColor: bgColor,
      color: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant='h6' gutterBottom>
      {title}
    </Typography>
    <Typography variant='h3'>{count}</Typography>
  </Box>
);
export default StatCard;
