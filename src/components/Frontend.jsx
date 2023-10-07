import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';
import ModalImage from "react-modal-image";

const Frontend = () => {
  return (
    <Container>
        <Row>
            <Col sm={10} md={6} lg={4} className='m-auto'>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main1'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Innovate frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Innovate_2/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className='m-auto'>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main2'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Ecommerce frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Arshakir/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={6} lg={4} className='m-auto'>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main3'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Innovate frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Innovate_1/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main4'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Restaurant frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Restaurant_Responsive/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main5'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Burger frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/Burger_2/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>

            <Col className='mt-3 m-auto' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1'>

                    <div className='Project_main6'></div>
                    <div className='projent_position-section px-3'>
                        <h5>Tempico frontend</h5>
                        <ul className='g'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                            <li>Jq-plugin</li>
                        </ul>
                        <div className='project_link'>
                            <a href='https://himuhimu112002.github.io/teampico/'><FiLink2></FiLink2></a>
                        </div>
                    </div>
                </div>
            </Col>
            
        </Row>
    </Container>
  )
}

export default Frontend