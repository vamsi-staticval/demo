import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/UIElements/Spinner';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your authentication logic here
    const res = await dispatch(signIn(formData)).unwrap();
    if (res?.token?.length > 0) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      {loading && <Spinner asOverlay={true} />}
      <Paper className='p-8 w-full max-w-md'>
        ``
        <Box className='space-y-6'>
          <Typography
            variant='h4'
            className='text-center font-semibold text-gray-800'
          >
            Sign In
          </Typography>
          {error && (
            <Typography className='text-red-600 text-center'>
              {error}
            </Typography>
          )}
          <form onSubmit={handleSubmit} className='space-y-4 mb-4'>
            <TextField
              fullWidth
              label='Email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='bg-white'
            />

            <TextField
              fullWidth
              label='Password'
              name='password'
              type='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='bg-white'
            />

            <Button
              type='submit'
              variant='contained'
              fullWidth
              className='bg-blue-600 hover:bg-blue-700 py-3'
            >
              Sign In
            </Button>
          </form>

          {/* <Typography className='text-center text-gray-600'>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className='text-blue-600 cursor-pointer hover:underline'
            >
              Sign Up
            </span>
          </Typography> */}
          <Typography className='text-center text-gray-600'>
            <span
              onClick={() => navigate('/')}
              className='text-blue-600 cursor-pointer hover:underline'
            >
              Go Back Home
            </span>
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default Signin;
