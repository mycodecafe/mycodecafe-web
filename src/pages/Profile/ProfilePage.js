import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { signOut } from '../../redux/actions/authActions'; // Import your logout action
import './ProfilePage.css';

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(signOut()); // Dispatch your logout action
  };

  return (
    <Container fluid className='profile-container'>
      <Row>
        <Col md={4}>
          <Card className='profile-card'>
            <Card.Body>
              <Image
                src={process.env.PUBLIC_URL + '/profile-image.jpg'} // Replace with actual profile image URL
                alt='User Profile'
                className='profile-image'
              />
              <h3>User's Name</h3>
              <p>User's Bio</p>
              <Button variant='primary'>Edit Profile</Button>
              <Button variant='danger' onClick={handleLogout}>Logout</Button> {/* Add logout button */}
            </Card.Body>
          </Card>
        </Col>
        {/* ... */}
      </Row>
    </Container>
  );
}

export default ProfilePage;
