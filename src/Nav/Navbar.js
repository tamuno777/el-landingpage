import React from 'react'
import logo from '../img/EL.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navzz() {
  return (
    
    <>
      {['md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-5 nav w-100 px-2">
          <Container fluid>
            <Navbar.Brand className=' nav-brand d-flex'>
                <div className='nav-img'>
                <img src= {logo}   width="100"
              height="30"
              className="d-inline-block align-top logo" title="EL" alt="home"  />
                </div>
               <div className='ps-2 pt-3 ttt'>
               <h4 className='nav-text'>ELORA <br /> REAL ESTATE</h4>
               </div>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="text-dark nav-side bg-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1  fs-5  nav-content pt-3">
                        <a>HOME</a>
                        <a className='nav-links' >ABOUT US</a>
                        <a className='nav-links'>PROPERTIES</a>
                        <a className='nav-links'>CONTACT US</a>
                        <a className='nav-links'>REGISTER </a>
                 

                </Nav>

                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


