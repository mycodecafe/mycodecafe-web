import { Container, Row, Col } from 'react-bootstrap';
import './Header.css'; // Import your custom CSS file

function Header() {
  return (
    <Container className='header'>
      <Row>
        <Col className="header-content-col">
          <div className="header-content">
            <h1>Place where learning is easy</h1>
            <p>
              mycodecafe is the best platform to help you enhance your skills, expand your knowledge, and prepare for
              technical interviews. So you can make it big in the world of computers.
            </p>
          </div>
        </Col>
        <Col className="header-img-col">
          <img src={process.env.PUBLIC_URL + '/images/header_img.png'} alt="header-img" />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
