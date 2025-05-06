import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import StatCard from '../../components/StatCard';

const Dashboard = () => {
  // Sample data - replace with actual data from your backend
  const statsData = [
    { title: 'Total Students', count: 250, bgColor: '#2196f3' },
    { title: 'Active Students', count: 180, bgColor: '#4caf50' },
    { title: 'Inactive Students', count: 70, bgColor: '#f44336' },
    { title: 'New Registrations', count: 25, bgColor: '#ff9800' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard
              title={stat.title}
              count={stat.count}
              bgColor={stat.bgColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
