import { useState } from 'react'

function App() {
let[color, setColor]= useState("black")
 function helper(colo){
  let d= document.querySelector('.iddd');
  d.style.backgroundColor=colo

 }
  return (
    <>
       <div>
        <div className="iddd" style={{backgroundColor:color ,width:"100vw", height:"20vh", display:'flex', justifyContent:'center',alignItems:'center'}}>background</div>
        </div>
     
      <button onClick={()=>{helper('red')}} >Red</button>
      <button onClick={()=>{helper('blue')}} >Blue</button>
      <button onClick={()=>{helper('black')}}>black</button>
      <button onClick={()=>{helper('white')}}>white</button>

    </>
  )
}

export default App




