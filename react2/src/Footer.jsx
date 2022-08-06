import React from 'react'
import './App.css'
import img2 from './images/car1.svg'
import img3 from './images/car2.svg'
import img4 from './images/car3.svg'
import img5 from './images/car4.svg'
const Footer = () => {
  return (
    <div className="container2">
         <div className="items"><img src={img2}></img></div>
         <div className="items"><img src={img3}></img></div>
         <div className="items"><img src={img4}></img></div>
         <div className="items"><img src={img5}></img></div>
      
    </div>
  )
}

export default Footer