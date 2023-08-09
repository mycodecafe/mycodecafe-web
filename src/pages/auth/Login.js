import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom'; // Import Link

import './Login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Perform basic login validation (for demonstration purposes)
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
      console.log('Logged in successfully');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <Container fluid className='login-container'>
      <Row>
        <Col className='login-image bg-light' md={6}>
          <img
            src={process.env.PUBLIC_URL + '/images/about_us.png'}
            alt='Login-img'
            className='img-fluid'
          />
        </Col>
        <Col md={6}>
          <div className='login-form'>
            <h2 className='text-center'>Join or log in</h2>
            <SocialLogin/>
            <Form onSubmit={handleLogin}>
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
                Login
              </Button>
            </Form>
            {loggedIn && <p>Logged in successfully!</p>}
              {/* "Don't have an account?" text with signup link */}
              <p className="signup-link-text">
              Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
