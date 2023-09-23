import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skill = () => {

  return (
    <>
      <Container>
          <div className='py-4 know_heading'>
            <p></p>
            <h3>MY BEST SKILLS</h3> 
            <p></p>
          </div>

            <Row>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>BOOTSTRAP</div>
              </Col>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>REACT-BOOTSTRAP</div>
              </Col>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>TAILWIND</div>
              </Col>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>JAVASCRIPT</div>
              </Col>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>REACT.JS</div>
              </Col>

              <Col sm={6} md={4} lg={2}>
                <div className='know_items'>STRAPI</div>
              </Col>

            </Row>

          <Row>
            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>FIREBASE</div>
            </Col>
            
            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>NODE.JS</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>EXPRESS.JS</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>MONGODB</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>SOCKET.IO</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>REACT-NATIVE</div>
            </Col>

          </Row>

          <div className='py-3 know_heading'>
            <h6>TOOLS</h6> 
          </div>

          <Row>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>VS-CODE</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>GIT & GITHUB</div>
            </Col>
            
            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>NETLIFY</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>STUDIO 3T</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>POSTMAN</div>
            </Col>

            <Col sm={6} md={4} lg={2}>
              <div className='know_items'>WEBSTROM</div>
            </Col>
            
          </Row>
      </Container>
    </>
  )
}

export default Skill