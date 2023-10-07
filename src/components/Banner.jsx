import react from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap'
import {Zoom} from "react-awesome-reveal";

const Banner = () => {

    const onButtonClick = () => {
        fetch('ReactCV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ReactCV.pdf';
                alink.click();
            })
        })
    }
  return (
    <div >

    <div className='bg_img' id="banner">
    <Container>
        <Row>
            <Col md={10} className='m-auto'>

                <div className='banner_left'>
                    <div>
                        <div className='banner_heading'>
                            <Zoom delay={1e1} cascade damping={1e-1}>
                                <p></p>
                                <h3 className='banner_heading--name'>MERN <span>STACK</span> DEVELOPER</h3>
                                <p></p>
                            </Zoom>
                        </div>

                        <h1 className='banner_heading--sub'><span>MY NAME</span> AKTARUJJAMAN.</h1>
                        <div className='mern_logo_section pt-4'>

                        <div className='mern_logo_main'>
                            <div className='mern_logo'>
                                <img src='image/mongodb.png'></img>
                            </div>
                        </div>
                        <div className='mern_logo_main'>
                            <div className='mern_logo'>
                                <img src='image/express-js.png'></img>
                            </div>
                        </div>
                        <div className='mern_logo_main'>
                            <div className='mern_logo'>
                                <img src='image/react.png'></img>
                            </div>
                        </div>
                        <div className='mern_logo_main'>
                            <div className='mern_logo'>
                                <img src='image/node.png'></img>
                            </div>
                        </div>
                        </div>
                        <div className='banner_button--div mt-5'>
                            <Button to="#contact" className='banner--button1'>CONTACT WITH ME</Button>
                            <Button onClick={onButtonClick} className='banner--button2'>DOWNLOAD CV</Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
    </div>
  )
}

export default Banner