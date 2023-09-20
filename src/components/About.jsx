import { Col, Container, Row} from 'react-bootstrap'

const About = () => {

    let aboutText = 'First, take my salam. I am Aktarujjaman and running student of CSE. I am  a professional front-end developer. I love taking on new challenges and solving problems. I can easily communicate with my all team members and I can adapt myself to any environment. My main focus is improving my MERN technology and programming skill.And I am a quick learner of any new technology.'

  return (
    <Container className='py-5' id="about">
        <Row>
            <Col sm={10} md={5} className='m-auto about_img_main'>
                <div className='banner_img--border m-auto'>
                    <div className='banenr_img__inner--border'>
                        <img className='img-fluid' src='image/banner.png'></img>
                    </div>
                </div>
            </Col>

            <Col sm={10} md={7} className='m-auto'>
            <div className='about_content'>

                <div className=' mt-4 about_heading'>
                    <p></p>
                    <h3>ABOUT ME</h3> 
                    <p></p>
                </div>

                <div className=' mt-5 text-center'>
                    <p className='about_subHeading text-center'>{aboutText}</p>
                </div>
                <div className='about_config'>
                    <Row>
                        <Col sm={10} md={10} lg={5} className='shadow-sm py-2 m-1'>
                        <div>
                        <h5>01</h5>
                        <p>Quality</p>
                        <p className='qualityDiscription'>Design quality is very important for every website. I make sure 100% quality and satisfaction before delivering the project.</p>
                        </div>
                        </Col>

                        <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1'>
                        <div>
                        <h5>02</h5>
                        <p>Responsive</p>
                        <p className='qualityDiscription'>Responsive is hart every website. So i am prefect fully Responsive any devices.</p>
                        </div>
                        </Col>
                    </Row>
                    
                </div>
                <div className='about_config'>
                    <Row>

                        <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1'>
                        <div>
                        <h5>03</h5>
                        <p>Support</p>
                        <p className='qualityDiscription'>I Will provide you life time any Support and some issu. I went to good relationship my all client</p>
                        </div>
                        </Col>

                        <Col sm={10} md={10} lg={5}  className='shadow-sm py-2 m-1'>
                        <div>
                        <h5>04</h5>
                        <p>Security and safety</p>
                        <p className='qualityDiscription'>Get complete Security website and safe your's all data and information</p>
                        </div>
                        </Col>
                        
                    </Row>
                </div>
                <img className='img-fluid signature_img' src='image/signature.png'></img>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About