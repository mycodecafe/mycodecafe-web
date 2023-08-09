import React from 'react';
import './NotFound.css'; // Import your CSS file

function NotFound() {
  return (
    <div className='not-found-container'>
      <img
        className='not-found-image'
        src={process.env.PUBLIC_URL + '/404-img.jpg'}
        alt='header-img'
      />
      <h1 className='not-found-text'>Oops! Page Not Found</h1>
    </div>
  );
}

export default NotFound;
