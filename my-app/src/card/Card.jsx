import React from 'react'
import './CardStyle.css'

export default function Card({img,id,name,price}) {
  return (
    <div className='card'>
        <div className='cardbox'>
                <img src={img}  id="cardimg" />
            <div className="contentspan">
                <span>{id}</span><br />
                <span>{name}</span><br />
                <span><strong>{price}</strong>/ Picture</span>
            </div>
        </div>

    </div>
  )
}
