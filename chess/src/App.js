import './App.css';
import { useState } from 'react';



import blkrook from './images/chess-rook-solid.svg'
import blkpawn from './images/chess-pawn-solid.svg'
import blkknight from './images/chess-knight-solid.svg'
import blkbishop from './images/chess-bishop-solid.svg'
import blkking from './images/chess-king-solid.svg'
import blkqueen from './images/chess-queen-solid.svg'

import whiterook from './images/chess-rook.svg'
import whitepawn from './images/chess-pawn.svg'
import whiteknight from './images/chess-knight.svg'
import whitebishop from './images/chess-bishop.svg'
import whiteking from './images/chess-king.svg'
import whitequeen from './images/chess-queen.svg'






const App=() => {



 
  const [newData,setData] = useState(
  [
    [
      {
        icon:blkrook
      },
      {
        icon: blkknight
      },
      {
        icon: blkbishop
      },
      {
        icon:blkking
      },
      {
        icon:blkqueen
      },
      {
        icon:blkbishop
      },
      {
        icon:blkknight
      },
      {
        icon:blkrook
      },

      
    ],
    [...Array(8)].map(()=>({
      icon:blkpawn

    })),
    ...[...Array(4)].map(()=>
    [...Array(8)].map(()=>({
      icon:null
    }))
    ),
  [...Array(8)].map(()=>({
    icon:whitepawn

  })),
  [
    {
      icon:whiterook
    },
    {
      icon: whiteknight
    },
    {
      icon: whitebishop
    },
    {
      icon:whiteking
    },
    {
      icon:whitequeen
    },
    {
      icon:whitebishop
    },
    {
      icon:whiteknight
    },
    {
      icon:whiterook
    },

    
  ]




])
  
  return (



    <div className="App">
    <div className="container">
    {newData.map((c,i)=>
    c.map(({icon},j)=>
       <div 
       key={i+""+j} 
       className="pieces"
       style={{
        backgroundColor: (i + j) % 2 ? "green" : "white"
       }}

       onClick={()=>{setData(newData)}}
       
       >
        {console.log(setData)}
       {  icon && <img src={icon}  alt="12"/>}
       </div>
    )

  )}
    </div>
      
    </div>
  );
}

export default App;
