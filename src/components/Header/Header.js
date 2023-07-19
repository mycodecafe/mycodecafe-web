import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='row'>
         <div className='col-md-6'>
            <div className='header-content'>
              <h1>Place where learning is easy</h1>
              <p>mycodecafe is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews. So you can make it big in the world of computers.</p>
            </div>         
         </div>
         <div className='col-md-6'>
            <img src={process.env.PUBLIC_URL + '/images/image_1.png'} className='header-image' alt='header-image' />
         </div>
      </div>
    </header>
  ) 
}

export default Header