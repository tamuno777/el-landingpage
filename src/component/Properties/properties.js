import React from 'react'
import { Row , Col} from 'react-bootstrap'
import H1 from '../../img/f1.jpg' 
import H2 from '../../img/unsplash_2d4lAQAlbDA.png' 
import H3 from '../../img/unsplash_MAnVoJlQUvg.png' 
import H4 from '../../img/unsplash_JvQ0Q5IkeMM.png' 
import { motion } from 'framer-motion'


export default function Properties() {

    
  return (
    <div>
        <div className="properties-box pt-4 ">
            <h5 className='text-center py-3'> PROPERTIES</h5>
           
           <Row className='mb-2' >
                <Col className='H2'>
                    <img src={H1} alt="image" 
                    
                    // initial={{
                    //     x:-100,
                    // }}
                    //  whileInView={{ x:0  }}
                    //  transition={{
                    //    type: "smooth",
                       
                    // }}
                    />
                </Col>
                <Col className='H3'>
                    <img src={H2} alt="image"
                //      initial={{
                //         x:100,
                //     }}
                //     whileInView={{ x:0}}
                //     transition={{
                //       type: "smooth",
                     
                //    }}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='H2'>
                    <img src={H3} alt="image"
                //      initial={{
                //         x:-100,
                //     }}
                //     whileInView={{x:10   }}
                //     transition={{
                //       type: "smooth",
                      
                //    }} 
                   />
                </Col>
                <Col className='H3'>
                    <img src={H4} alt="image" 
                //      initial={{
                //         x:100,
                //     }}
                //     whileInView={{ x:0}}
                //     transition={{
                //       type: "smooth",
                //     //   duration: 0.7,
                //    }}
                    />
                </Col>
            </Row>

           
        </div>
    </div>
  )
}
