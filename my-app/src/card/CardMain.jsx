import React from 'react'
import Card from './Card'
import './CardMainStyle.css'
import img_1 from './2.jpg'
import img_2 from './4.jpg'
import img_3 from './7.jpg'
import img_4 from './9.jpg'


export default function CardMain() {
  return (
    <div className='cardmain'>
        <Card img={img_1} id='5.0/USA' name='Naruto' price='From $200'/>
        <Card img={img_2} id='6.8/Japan' name='Itachi' price='From $400'/>
        <Card img={img_3} id='9.0/Spain' name='Real madrid' price='From $900'/>
        <Card img={img_4} id='10.0/Portugal' name='Ronaldo' price='From $100000'/>
    </div>
  )
}
