import React from 'react'
import './Navbar.css'
import logo from'./NavbarLogo.png'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="content">
      <img src={logo} id="logo"alt="" />

<ul>
  <li><button>{props.title}</button></li>
  <li><button>About</button></li>
  <li><button>{props.phone}</button></li>
</ul>

      </div>
       

    </div>
  )
}
