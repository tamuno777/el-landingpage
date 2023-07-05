import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Button from '@mui/material/Button';
import facebook from '../../img/Facebook.svg'
import google from '../../img/Google.svg'
import twitter from '../../img/Twitter.svg'
import pintrest from '../../img/Pinterest.svg'
import { motion } from 'framer-motion';

// import Input  from "@mui/material/Input"

export default function Contact() {
  return (
    <div className='contact-container pt-5 pb-3'>
        <div className="contact-box pt-5">
        <h5 className='text-center py-3 '> CONTACT</h5>
            <Row className='ps-5' >
                <Col className='first-contact'>
                    <p>Address: Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
                    <p>Phone Number: +99 (0) 101 0000 888</p>
                    <p>Email: Info@yourdomain.com</p>
                    
                </Col>
                <Col className='second-contact'>
                <p>Address: Patricia Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</p>
                <p>Phone Number: +99 (0) 101 0000 888</p>
                <p>Email: Info@yourdomain.com</p>
                    
                </Col>
            </Row>
        </div>
        <motion.div className=" text-center register-box py-5 mt-5" >
         <div className='over'>
         <div>
          <h5 className='text-white hhh'>REGISTER WITH US</h5>
          </div>
          <div className='input-box1'>
          <input placeholder="Email" variant="outlined" className="inpute ps-2 py-2"/>
          </div>
          <div className='input-box1'>
          <input placeholder="Phone number" variant="outlined" className="inpute ps-2 py-2"/>
          </div>
          <Button variant="contained" href="#contained-buttons" className='Button2'>
               SUBMIT
            </Button>
            <div className='social d-flex'>
              <div className='small'>
              <p className='text-white d-flex '>Or log in with
                
                </p>
              </div>
              <div className='d-flex sol  '>
                 <div className='me-2 ms-2'> <img src={google} alt=""  /></div>
                 <div className='mx-2'> <img src={pintrest} alt="" /></div>
                  <div className='mx-2'><img src={facebook} alt="" /></div>
                  <div className='mx-2'><img src={twitter} alt="" /></div>
                </div>
            </div>
         </div>


        </motion.div>
        <footer className='py-4'>
          <p className='text-white text-center'><small>© 2023 Real Estate.All rghts reserved.</small></p>
        </footer>
    </div>
  )
}
