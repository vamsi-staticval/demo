import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from '../pages/auth/Signin';
import Dashboard from '../pages/[admin]/Dashboard';
import NotFound from '../pages/NotFound';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/home/Home';
import withAuth from '../hoc/withAuth';

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
      <Route path='/dashboard' element={withAuth(Dashboard)()} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRoutes;
