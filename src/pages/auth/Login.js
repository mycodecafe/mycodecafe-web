import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { useDispatch } from 'react-redux'; // Import useDispatch
import { signInWithEmail } from '../../redux/actions/authActions'; // Import signInWithEmail action

import './Login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        await dispatch(signInWithEmail(email, password)); // Dispatch the signInWithEmail action
        setLoggedIn(true);
        navigate('/'); // Navigate to the profile page after successful login
        console.log('Logged in successfully');
      } catch (error) {
        console.error('Error signing in:', error);
      }
    } else {
      console.log('Login failed');
    }
  };

  return (
    <Container fluid className='login-container'>
      <Row>
        <Col md={6} className="bg-light">
         <img src={process.env.PUBLIC_URL + '/images/image_3.png'} alt="login-img" className='login-image'/>
        </Col>
        <Col md={6}>
          <div className='login-form'>
            <h2 className='text-center'>Join or log in</h2>
            <SocialLogin />
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
            <p className='signup-link-text'>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
