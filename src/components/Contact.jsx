import React, { useState } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    let [userName, setuserName] = useState("")
    let [userEmail, setuserEmail] = useState("")
    let [userSubject, setuserSubject] = useState("")
    let [userSms, setuserSms] = useState("")

    let [userNameerror, setuserNameerror] = useState("")
    let [userEmailerror, setuserEmailerror] = useState("")
    let [usersubjecterror, setusersubjecterror] = useState("")
    let [usersmserror, setusersmserror] = useState("")

    let handleName = (e)=>{
        setuserName(e.target.value)
        setuserNameerror("")
    }
    let handlEmal = (e)=>{
        setuserEmail(e.target.value)
        setuserEmailerror("")
    }
    let handlesubject = (e)=>{
        setuserSubject(e.target.value)
        setusersubjecterror("")
    }
    let handleSms= (e)=>{
        setuserSms(e.target.value)
        setusersmserror("")
    }

    let handleSend =()=>{
        if(!userName){
            setuserNameerror("Please Input Your Name Here !")
        }
        if(!userEmail){
            setuserEmailerror("Please Input Your Email Here !")
        }
        if(!userSubject){
            setusersubjecterror("Please Input Your Subject Here !")
        }
        if(!userSms){
            setusersmserror("Please Input Your Message Here !")
        }
        if(userName && userEmail && userSubject && userSms){
            setTimeout(()=>{
                toast.success("Successfully Submited.");
            },1000)                      
        }
    }



  return (
    <>

    <ToastContainer position="top-right" theme="dark"/>
      
    <Container className='my-5 px-5 contact_main shadow rounded' id="contact">
        
        <Row>
            <div className='py-5 know_heading'>
                <p></p>
                <h3>TALK WITH ME</h3> 
                <p></p>
            </div>

            <div className='contact_info mt-5 pb-5'>
                <div>
                    <h4>Phone Number</h4>
                    <li>01733571516</li>
                    <li>01637244543</li>
                </div>

                <div>
                    <h4 className=''>Email Address</h4>
                    <p>mdhmaktaruzzaman9101@gmail.com</p>
                </div>
            </div>

            <Col className='m-auto' sm={10} md={4}>
            <Form onChange={handleName}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-black'>Name</Form.Label>
                    <Form.Control required type="text" placeholder="name" />
                </Form.Group>
            </Form>
            <p className='text-red'>{userNameerror}</p>

            </Col>
            <Col className='m-auto'  sm={10} md={4}>
            <Form  onChange={handlEmal}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-black'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
            </Form>
            <p>{userEmailerror}</p>

            </Col>
            <Col className='m-auto'  sm={10} md={4}>
            <Form  onChange={handlesubject}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-black'>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Abc" />
                </Form.Group>
            </Form>
            <p>{usersubjecterror}</p>

            </Col>

            <Col className='m-auto'>
            <Form.Group  onChange={handleSms} className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='text-black'>Message</Form.Label>
                <Form.Control placeholder="xxxxxxxxxxxxxxxxxxxxxx" as="textarea" rows={3} />
            </Form.Group>
            <p>{usersmserror}</p>

            <div className='text-center py-3 pb-5'>
                <Button onClick={handleSend} className='banner--button2'>SEND MESSAGE</Button>
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contact