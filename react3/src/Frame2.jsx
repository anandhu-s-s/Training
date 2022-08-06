import React from 'react'
import './App.css';
import img1 from './images/pizza.jpg'

const Frame2 = () => {
  return (
  <>
    <div className="frame2">
    <div className="pizza3">Pizza</div>
   <img src={img1} alt="" className="imag2"/>
    <button className="btn2">Buy Now</button>
    </div>
    </>
  )
}

export default Frame2