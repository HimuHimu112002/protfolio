import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiDark } from 'react-icons/ci';
import { HashLink as Link } from 'react-router-hash-link';
const NavMenu = () => {

  const [darkmode, setdarkmode] = useState(false);

  useEffect(()=>{
    if (darkmode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white"
    }else{
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }, [darkmode])


  function changeBG() {
    let navbar = document.getElementById('navbar')
    let scrollValoue = window.scrollY;
    if(scrollValoue < 150){
      navbar.classList.remove('bgColor')
    }else{
      navbar.classList.add('bgColor')
    }
  }
  window.addEventListener('scroll', changeBG)


  return (

    
    <Navbar id="navbar" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <img src='image/logo.png'></img>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="m-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >

          <Link to="#banner">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#service">Service</Link>
          <Link to="#project">Project</Link>
          <Link to="#contact">Contact</Link>

        </Nav>
        <Button onClick={() => setdarkmode(!darkmode)} className='menu_dark--button'><span><CiDark></CiDark></span></Button>
        <Link to="https://github.com/HimuHimu112002">
          <Button className='menu_contact--button'>GITHUB LINK</Button>
        </Link>
      </Navbar.Collapse>

    </Container>
    </Navbar>
  )
}

export default NavMenu