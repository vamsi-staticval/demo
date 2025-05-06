import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminLayout from '../layouts/AdminLayout';

const withAuth = (Component) => {
  const WrappedComponent = (props) => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
      return <Navigate to='/signin' replace />;
    }

    return (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    );
  };

  return WrappedComponent;
};

export default withAuth;
