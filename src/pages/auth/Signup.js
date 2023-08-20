import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Signup.css'; // Import your CSS file
import { useDispatch } from 'react-redux';
import { signUpWithEmail } from '../../redux/actions/authActions'; // Import the signUpWithEmail action
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // Track signup success
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        await dispatch(signUpWithEmail(email, password)); // Dispatch the signUpWithEmail action
        setSignupSuccess(true);
        navigate('/');
        console.log('Signup successful');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else {
      console.log('Signup failed');
    }
  };

  return (
    <Container fluid className='signup-container'>
      <Row>
        <Col md={6}>
          <img src={process.env.PUBLIC_URL + '/images/image_3.png'} alt="login-img" className='signup-image'/>
        </Col>
        <Col md={6}>
          <div className='signup-form'>
            <h2 className='text-center'>Join or log in</h2>
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
            <p className='login-link-text'>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
