import React from 'react';
import './SocialLogin.css'; // Import your CSS file

function SocialLogin() {
  return (
    <div className="social-login-container">
      <button className="social-button google-button">Login with Google</button>
      <button className="social-button facebook-button">Login with Facebook</button>
    </div>
  );
}

export default SocialLogin;
