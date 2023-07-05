import { motion , useAnimation} from 'framer-motion'
import React from 'react'
import Button from '@mui/material/Button';

export default function Firstpage() {
  return (
    <div className='firstpage-container '>
        <div className='banner'>
        <div className='firstpage-box'>
            <h1 className='ll'>
                FIND YOUR PLACE  OF COMFORT AND RELAXATION
            </h1>
            <p>Elora real estate provides you with a comfortable apartment which is safe and secure.</p>
            <Button variant="contained" href="#contained-buttons" className='Button'>
                Read more
            </Button>


        </div>
        </div>
    </div>
  )
}
