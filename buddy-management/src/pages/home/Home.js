import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const appName = process.env.REACT_APP_APPNAME || 'Staticval';

  const features = [
    {
      title: 'Student Records',
      description: 'Manage student personal information and academic records',
      path: '/dashboard',
    },
    {
      title: 'Attendance',
      description: 'Track daily student attendance and generate reports',
      path: '/dashboard',
    },
    {
      title: 'Performance',
      description: 'Monitor academic performance and grades',
      path: '/dashboard',
    },
    {
      title: 'Reports',
      description: 'Generate and view various student reports',
      path: '/reports',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth='lg' sx={{ py: 4, flex: 1 }}>
        <Typography variant='h3' component='h1' gutterBottom align='center'>
          {appName} System
        </Typography>

        <Typography variant='h6' color='textSecondary' align='center' paragraph>
          Welcome to the {appName} dashboard
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant='h5' component='h2' gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' paragraph>
                    {feature.description}
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => navigate(feature.path)}
                  >
                    Access
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;
