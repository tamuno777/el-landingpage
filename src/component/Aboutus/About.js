import React from 'react'
import bgSvg from '../../El img/Ellipse 13.png'
import lady from '../../El img/unsplash_mpDV4xaFP8c.png'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <div className='about-container'>
        <div className="about-box ">
            <motion.div className="about-text"
            // animate={{
            //   x:"25%"
              
            // }}
            whileInView={{
              x:"25%"
            }}
            transition={{
              // duration:0.5
              type:"spring",
              stifness:100
            }}
           
            >
                <h5 className='pb-2'>ABOUT US</h5>
                <p>
                Elora Real Estate endeavor to enable your locale to flourish. We have an extraordinary aptitude for working with complex networks with huge spending plans and offering various enhancements to their occupants. Likewise, we oversee business affiliations and blended-use advancements, just as multi-family and financial specialists claimed rental and REO properties for institutional and private value customers.

                </p>
            </motion.div>
            <div className="about-img">
                <img src={bgSvg} alt="" className='bgSvg'/>
                <img src={lady} alt="" className='lady' />
            </div>

        </div>
    </div>
  )
}
