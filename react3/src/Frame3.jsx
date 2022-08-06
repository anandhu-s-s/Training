import React from 'react'
import './App.css';
import img1 from './images/pizza.jpg'

const Frame3 = () => {
  return (
    <>
    <div className="frame3">
     
        <div className="layer1">
    <div className="food food1">My Foods</div>
    <div className="pizza pizza-font">Pizza</div>
    <div className="burger  burg-font">Burger</div>
    <div className="tacoos  tac-font">Tacoos</div>
    </div>
    

    <div className="frame5" id="fr2">
    <div className="pizza2">Pizza</div>
   <img src={img1} alt="" className="imag"/>
    <button className="btn">Buy Now</button>
    </div>
    </div>
    
    </>
  )
}

export default Frame3