import { Col, Container, Row } from 'react-bootstrap'
import { FiLink2 } from 'react-icons/fi';

const Backend = () => {

  return (
    <Container>
        <Row>
            <Col className='m-auto mt-3' sm={10} md={6} lg={4}>
                <div className='p-2 shadow-sm rounded-1'>

                <div className='Project_main'>
                    <img className="img-fluid" src="image/inventory.png"></img>
                </div>

                <div className='projent_position-section'>
                    <h5>Inventory Management</h5>
                    <ul className='g'>
                        <li>React.js</li>
                        <li>Node</li>
                        <li>Mongodb</li>
                    </ul>
                    <div className='project_link'>
                        <a href='https://inventory-management-system-mern.netlify.app/'><FiLink2></FiLink2></a>
                    </div>
                </div>
                
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Backend