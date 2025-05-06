import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Spinner = ({ asOverlay = false, size = 'medium', color = 'primary' }) => {
  // Convert size string to number for MUI
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 56,
  };

  const spinnerSize = sizeMap[size] || sizeMap.medium;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(asOverlay && {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.7)',
          zIndex: 1000,
        }),
      }}
    >
      <CircularProgress size={spinnerSize} color={color} />
    </Box>
  );
};

export default Spinner;
