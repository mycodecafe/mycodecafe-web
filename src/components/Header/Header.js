import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css'; // Import your custom CSS file

function Header() {
  return (
    <section className="section hero has-bg-image" id="home" aria-label="home">
      <Container>
      <Row className="align-items-center justify-content-center">  
          <Col className="hero-content-col">
            <h1 className="h1 section-title">
              Place where learning is easy
            </h1>
            <p className="hero-text">
              mycodecafe is the best platform to help you enhance your skills, expand your knowledge, and prepare for
              technical interviews. So you can make it big in the world of computers.
            </p>
            <a href="/" className="btn has-before">
              <span className="span">Find courses</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>
          </Col>
          <Col className="hero-banner-col">
          <img src={process.env.PUBLIC_URL + '/images/image_1.png'} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
