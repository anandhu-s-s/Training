import React from 'react';
import './App.css';
import {useEffect,useState}from 'react';

function App() {

  useEffect(() =>{
    setDisplay("Blue")
  },[])
  
  const[display,setDisplay]=useState("")
  
  return (
    
    <div className="App">
      
      <br></br>
      
      {display==="Blue" ?
        <button className='blue' onClick={()=>{setDisplay("Red")}}>Blue</button>:
        display==="Red" ?
        <button className='red' onClick={()=>{setDisplay("Green");}}>Red</button> 
        :
        <button className='green' onClick={()=>{setDisplay("Red");}}>Green</button>
      }
  


    </div>
  );
}

export default App;