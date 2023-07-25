import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.css'; // Import your custom CSS file

function AboutUs() {
  return (
    <Container className="about-us-container">
      <Row>
        <Col md={6} className="about-us-image-col">
          <div className="about-us-image">
            <img src={process.env.PUBLIC_URL + '/images/about_us.png'} alt="About Us" />
          </div>
        </Col>
        <Col md={6} className="about-us-content-col">
          <div className="about-us-content">
            <h2>About Us</h2>
            <p>
              At mycodecafe, we believe that learning should be accessible and enjoyable for everyone. Our mission is to
              provide high-quality programming tutorials, resources, and interview preparation materials to empower
              learners around the world. Whether you are a beginner or an experienced developer, mycodecafe is here to
              support your learning journey.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
