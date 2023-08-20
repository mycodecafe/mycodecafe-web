import React from 'react';
import './SocialLogin.css'; // Import your CSS file
import { signInWithGoogle } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SocialLogin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
  
    const handleGoogleSignIn = async () => {
        await dispatch(signInWithGoogle());
        navigate('/'); // Navigate to the desired route after successful login
      };
      
    
  return (
    <div className="social-login-container">
      <button className="social-button google-button" onClick={handleGoogleSignIn}>Login with Google</button>
      <button className="social-button facebook-button">Login with Facebook</button>
    </div>
  );
}

export default SocialLogin;
