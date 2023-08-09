import React from 'react';
import './SocialLogin.css'; // Import your CSS file
import { signInWithGoogle } from '../../redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function SocialLogin() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
  
    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
      };
      
    
  return (
    <div className="social-login-container">
      <button className="social-button google-button" onClick={handleGoogleSignIn}>Login with Google</button>
      <button className="social-button facebook-button">Login with Facebook</button>
    </div>
  );
}

export default SocialLogin;
