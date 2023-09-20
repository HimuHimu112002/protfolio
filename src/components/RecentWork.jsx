import { Col, Container, Row } from "react-bootstrap"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import Backend from "./Backend";
import React from "./React";
import Frontend from "./Frontend";
import Strapi from "./Strapi";
// import ReactNative from "./ReactNative";

const RecentWork = () => {
    const [key, setKey] = useState('FRONTEND');
  return (
   <Container className="pt-5" id="project">
   <div className='py-5 about_heading'>
        <p></p>
        <h3>LATEST PROJECT</h3> 
        <p></p>
    </div>
    <Row>
        <Col md={12} className="tab_section">
            <Tabs
                defaultActiveKey="FRONTEND"
                id="uncontrolled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">

                <Tab eventKey="FRONTEND" title="FRONTEND">
                   <Frontend></Frontend>
                </Tab>

                <Tab eventKey="REACT.JS" title="REACT.JS">
                    <React></React>
                </Tab>

                <Tab eventKey="BACKEND" title="BACKEND">
                    <Backend></Backend>
                </Tab>
                <Tab eventKey="STRAPI" title="STRAPI">
                    <Strapi></Strapi>
                </Tab>
                {/* <Tab eventKey="NATIVE" title="REACT-NATIVE">
                    <ReactNative></ReactNative>
                </Tab> */}
            </Tabs>
        </Col>
    </Row>
   </Container>
  )
}

export default RecentWork