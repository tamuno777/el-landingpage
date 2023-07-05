import React from 'react'
import { Row , Col} from 'react-bootstrap'
import H1 from '../../img/53024510117_5a6d973d00_o.png' 
import H2 from '../../img/53025479905_2fe503ba3a_o.png' 
import H3 from '../../img/53024510107_a77d4dcb30_o.png' 
import H4 from '../../img/53025575728_8e06a4f5bb_o.png' 
import { motion } from 'framer-motion'


export default function Properties() {

    
  return (
    <div>
        <div className="properties-box pt-4 ">
            <h5 className='text-center py-3'> PROPERTIES</h5>
           
           <Row className='mb-2' >
                <Col className='H2'>
                    <motion.img src={H1} alt="image" 
                    
                    initial={{
                        x:-100,
                    }}
                     whileInView={{ x:0  }}
                     transition={{
                       type: "smooth",
                       
                    }}
                    />
                </Col>
                <Col className='H3'>
                    <motion.img src={H2} alt="image"
                     initial={{
                        x:100,
                    }}
                    whileInView={{ x:0}}
                    transition={{
                      type: "smooth",
                     
                   }}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='H2'>
                    <motion.img src={H3} alt="image"
                     initial={{
                        x:-100,
                    }}
                    whileInView={{x:10   }}
                    transition={{
                      type: "smooth",
                      
                   }} 
                   />
                </Col>
                <Col className='H3'>
                    <motion.img src={H4} alt="image" 
                     initial={{
                        x:100,
                    }}
                    whileInView={{ x:0}}
                    transition={{
                      type: "smooth",
                    //   duration: 0.7,
                   }}
                    />
                </Col>
            </Row>

           
        </div>
    </div>
  )
}
