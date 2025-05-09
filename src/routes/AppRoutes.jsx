import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from '../pages/auth/Signin';
import Dashboard from '../pages/[admin]/Dashboard';
import NotFound from '../pages/NotFound';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/home/Home';
import withAuth from '../hoc/withAuth';
import BuddyManagement from '../components/A/BuddyManagement';
import StudentData from '../components/A/StudentData';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route
        path='/signin'
        element={
          <AuthLayout>
            <Signin />
          </AuthLayout>
        }
      />

      <Route path='/dashboard' element={withAuth(Dashboard)()}></Route>
      <Route path='/buddies' element={<BuddyManagement />} />
      <Route path='/studentdata' element={<StudentData />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
/*
REACT_APP_API_BASE_URL=http://example.com/api
REACT_APP_API_BASE_URL=https://budget-planner-app-omega.vercel.app/api
*/

/*
11111111111111111111
import RequireAuth from '../hoc/RequireAuth'; // or wherever you saved it
import Dashboard from '../pages/[admin]/Dashboard';

<Route
  path="/dashboard"
  element={
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  }
/>
 
222222222222222222222222222222
// RequireAuth.js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminLayout from '../layouts/AdminLayout';

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <AdminLayout>{children}</AdminLayout>;
};

export default RequireAuth;


*/
