import { Box } from '@mui/material';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AdminHeader />
      <div className='px-4'>{children}</div>
      <AdminFooter />
    </Box>
  );
};

export default AdminLayout;
