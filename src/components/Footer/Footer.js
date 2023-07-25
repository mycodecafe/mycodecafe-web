import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MyCodeCafe. All rights reserved.</p>
        <p>Contact us: contact@mycodecafe.com</p>
      </div>
    </footer>
  );
}

export default Footer;
