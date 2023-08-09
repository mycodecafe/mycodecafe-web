import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Signup.css'; // Import your CSS file
import SocialLogin from '../../components/SocialLogin/SocialLogin';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // Track signup success

  const handleSignup = (event) => {
    event.preventDefault();
    
    // Perform basic signup validation (for demonstration purposes)
    if (email && password) {
      setSignupSuccess(true);
      console.log('Signup successful');
    } else {
      console.log('Signup failed');
    }
  };

  return (
    <Container fluid className='signup-container'>
      <Row>
        <Col className='signup-image bg-light' md={6}>
          <img
            src={process.env.PUBLIC_URL + '/images/about_us.png'}
            alt='signup-img'
            className='img-fluid'
          />
        </Col>
        <Col md={6}>
          <div className='signup-form'>
            <h2 className='text-center'>Join or log in</h2>
            <SocialLogin/>
            <Form onSubmit={handleSignup}>
              <Form.Group controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Sign Up
              </Button>
            </Form>
            {signupSuccess && <p>Signup successful!</p>}
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
