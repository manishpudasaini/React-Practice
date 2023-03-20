import React from 'react'

//image import
import img1 from './2.jpg'
import img2 from './4.jpg'
import img3 from './6.jpg'

import './HeroStyle.css'


export default function Hero() {
  return (
    <div className="hero">
        <div className="image">
            <img src={img1} alt="" id="img1"/>
            <img src={img2} alt="" id="img2"/>
            <img src={img3} alt="" id="img3"/>
        
        </div>

        <div className='herocontent'>
            <h1>Online experience</h1>
            <p>The React. js framework is an open-source JavaScript framework and library developed by Facebook. 
                It's used for building interactive user interfaces and web applications
                 quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
        </div>

    </div>
        
  )
}
