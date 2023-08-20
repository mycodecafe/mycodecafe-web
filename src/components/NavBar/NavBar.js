import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link
// import { Container, Navbar, Nav, Offcanvas, Image } from 'react-bootstrap';
import { Container, Navbar, Nav, Offcanvas, Image, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import './NavBar.css';

function NavBar() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Get the authentication status

  const [showDropdown, setShowDropdown] = useState(false); // State for showing/hiding the dropdown

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src={process.env.PUBLIC_URL + '/mycodecafe_logo.svg'} alt="brand-logo" className='brand-logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className="custom-navbar-toggle" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img src={process.env.PUBLIC_URL + '/mycodecafe_logo.svg'} alt="brand-logo" className='brand-logo' />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="navbar-list mx-auto">
                {/* Use Link components */}
                <Nav.Link as={Link} to="/home" className='navbar-item'>Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className='navbar-item'>About</Nav.Link>
                <Nav.Link as={Link} to="/courses" className='navbar-item'>Courses</Nav.Link>
                <Nav.Link as={Link} to="/blog" className='navbar-item'>Blog</Nav.Link>
                <Nav.Link as={Link} to="/contact" className='navbar-item'>Contact</Nav.Link>
              </Nav>

            {isAuthenticated ? (
            <Dropdown show={showDropdown} align="end">
              <Dropdown.Toggle
                as={Image}
                src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
                roundedCircle
                onClick={toggleDropdown}
                className="profile-picture"
              />
              {/* Use the ProfileDropdown component */}
              <ProfileDropdown />
            </Dropdown>
          ) : (
            <Link to="/login" className="btn has-before">
              <span className="span">Login</span>
            </Link>
          )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
