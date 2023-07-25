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
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL + '/mycodecafe_logo.svg'} alt="brand-logo" className='brand-logo' /></Navbar.Brand>
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
                <Nav className="justify-content-end flex-grow-1 pe-3 ml-2">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">AboutUs</Nav.Link>
                  <Nav.Link href="#action2">Tutorial</Nav.Link>
                  <Nav.Link href="#action2">Login</Nav.Link>
                  <Nav.Link href="#action2">SignUp</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;