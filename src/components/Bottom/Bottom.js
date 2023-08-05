import React from 'react'
import Footer from '../Footer/Footer'
import { Col, Row } from 'react-bootstrap'

function Bottom() {
  return (
    <section>
        <Row>
         <Col md={3}>
            <h5></h5>
         </Col>
         <Col md={3}></Col>
         <Col md={3}></Col>
         <Col md={3}></Col>
        </Row>
        <Footer />
    </section>
  )
}

export default Bottom