import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    role: '',
    joinedDate: '',
  });

  useEffect(() => {
    // TODO: Replace with actual API call to fetch user profile
    // This is just mock data for demonstration
    const fetchUserProfile = () => {
      setUserProfile({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Developer',
        joinedDate: '2023-01-01',
      });
    };

    fetchUserProfile();
  }, []);

  return (
    <Container className='py-5'>
      <Card>
        <Card.Body>
          <h2 className='mb-4'>My Profile</h2>
          <Row>
            <Col md={6}>
              <div className='mb-3'>
                <strong>Name:</strong>
                <p>{userProfile.name}</p>
              </div>
              <div className='mb-3'>
                <strong>Email:</strong>
                <p>{userProfile.email}</p>
              </div>
              <div className='mb-3'>
                <strong>Role:</strong>
                <p>{userProfile.role}</p>
              </div>
              <div className='mb-3'>
                <strong>Joined Date:</strong>
                <p>{userProfile.joinedDate}</p>
              </div>
              <Button variant='primary'>Edit Profile</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
