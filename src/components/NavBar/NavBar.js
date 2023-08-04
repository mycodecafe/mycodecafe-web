import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className=" navbar bg-body-tertiary mb-3" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + '/mycodecafe_logo.svg'} alt="brand-logo" className='brand-logo' /></Navbar.Brand>
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
                <Nav.Link className='navbar-item' href="#action1">Home</Nav.Link>
                <Nav.Link className='navbar-item' href="#action2">About</Nav.Link>
                <Nav.Link className='navbar-item' href="#action2">Courses</Nav.Link>
                <Nav.Link className='navbar-item' href="#action2">Blog</Nav.Link>
                <Nav.Link className='navbar-item' href="#action2">Contact</Nav.Link>
              </Nav>
              <a href="/" class="btn has-before">
            <span class="span">Try for free </span>
          </a>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;