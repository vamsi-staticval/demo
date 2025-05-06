import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';

const AuthLayout = ({ children }) => (
  <>
    <Header />
    <div className='flex items-center justify-center bg-gray-100 h-[calc(100vh-132px)]'>
      {children}
    </div>
    <Footer />
  </>
);
export default AuthLayout;
