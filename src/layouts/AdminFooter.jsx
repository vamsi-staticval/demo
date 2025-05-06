import { Typography, Box } from '@mui/material';

const AdminFooter = () => {
  const appName = process.env.REACT_APP_APPNAME || 'Staticval';
  return (
    <Box
      component='footer'
      sx={{ py: 3, px: 2, mt: 'auto', bgcolor: 'grey.200' }}
    >
      <Typography variant='body2' color='text.secondary' align='center'>
        &copy; {new Date().getFullYear()} {appName}. All rights reserved.
      </Typography>
      <Typography variant='body2' color='text.secondary' align='center'>
        Powered by Staticval
      </Typography>
      <Typography variant='body2' color='text.secondary' align='center'>
        Version: {process.env.REACT_APP_VERSION}
      </Typography>
    </Box>
  );
};

export default AdminFooter;
