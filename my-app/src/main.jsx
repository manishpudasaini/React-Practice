import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import CardMain from './card/CardMain'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar title="Home" phone="Contact"/>
    <Hero /> 
    <CardMain />

  </React.StrictMode>,
)
