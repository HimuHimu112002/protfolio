import {Col, Container, Row } from "react-bootstrap"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {
    let slide1 = "Great design, exactly what I wanted and more! I pray for you and your's work alwas you do then best work keep it up "

    let slide2 = "Darshan is a web development wizard! I couldn't be happier with the Angular React website he created for me, coupled with a robust Node.js and C# backend. Darshan's expertise shines through in every aspect of the project. From seamless user navigation to lightning-fast performance, he delivered beyond my expectations. His dedication, communication, and attention to detail made the entire process a breeze. I'm genuinely satisfied with the results and can't thank Darshan enough for his exceptional work. If you're looking for a talented developer, Darshan is your go-to guy"

    let slide3 = 'Really great work, an angular website divided in components. He finished it before the time and added some other edits after the first request.'
  return (
    <Container className="pb-5">
      <Row>
        <div className='py-5 know_heading'>
          <p></p>
            <h3>TESTIMONIALS</h3> 
          <p></p>
        </div>

        <div className="slider__section">

      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          
          <Carousel>

              <Carousel.Item>
              <div className="carousel-item active">
              <div className="slider__item">
                <div className="slider__img">
                  <img src="image/client.png" className="img-fluid" alt=""/>
                </div>
                
                <p className="slider__sub">{slide1}</p>
                <div className="slider__star">  
                <span><AiFillStar></AiFillStar></span>
                <span><AiFillStar></AiFillStar></span>
                <span><AiFillStar></AiFillStar></span>
                <span><AiFillStar></AiFillStar></span>
                <span><AiFillStar></AiFillStar></span>
                </div>
                <h3>Cutiepinky07</h3>
                <h6>Fiverr Client</h6>
              </div>
            </div>
              </Carousel.Item>


              <Carousel.Item>
              <div className="carousel-item active">
              <div className="slider__item">
                <div className="slider__img">
                <img src="image/client2.jpg" className="img-fluid" alt=""/>
                </div>

                <p className="slider__sub">{slide2}</p>
                  <div className="slider__star">  
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                  </div>
                <h3>nevil99</h3>
                <h6>Fiverr Client</h6>
              </div>
            </div>
              </Carousel.Item>


              <Carousel.Item>
              <div className="carousel-item active">
              <div className="slider__item">
                <div className="slider__img">
                <img src="image/client3.jpg" className="img-fluid" alt=""/>
                </div>
                <p className="slider__sub">{slide3}</p>
                  <div className="slider__star">  
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                    <span><AiFillStar></AiFillStar></span>
                  </div>
                <h3>Himu</h3>
                <h6>Local Client Bangladesh</h6>
              </div>
            </div>
              </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
      </Row>
    </Container>
  )
}

export default Testimonial