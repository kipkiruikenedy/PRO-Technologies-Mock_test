import { Button } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import  './Calculator.css';




function Calculator() {
 
  
 
  const handleSelectedSize=(e)=>{
    setPaperSize(e.target.value)
  }

  const handleSelectedPrintingSides=(e)=>{
    setPrintingSides(e.target.value)
  }

  const handleSelectedPaperType=(e)=>{
    setPapertype(e.target.value)
  }

 const size=["A3","A4"]
   
 const initquantity=localStorage.getItem('quantity')||1;
 const initpapertype=Number(localStorage.getItem('papertype')||'130 Gloss/Matt');
 const initPrintingSides=localStorage.getItem('printingSides')||'4 color(single-side)';
 const initPapersize=localStorage.getItem(size[0]);
 console.log(initPapersize)



 const [quantity, setQuantity] = useState(initquantity);
 const [papertype, setPapertype] = useState(initpapertype);
 const [printingSides, setPrintingSides] = useState(initPrintingSides);
 const [paperSize, setPaperSize] = useState(initPapersize);
 const [Total, setTotal] = useState(0);

 


 

 useEffect(() => {
  localStorage.setItem('paperSize',paperSize);
  localStorage.setItem('printingSides',printingSides);
  localStorage.setItem('papertype',papertype);
  localStorage.setItem('quantity',quantity);
  localStorage.setItem('Total',Total);

  



 if (quantity<=101) {
 const newTotal=300;
  setTotal(newTotal)
 }
 else if(quantity<=201){
  const newTotal=500;
  setTotal(newTotal)
 }
 else if(quantity<=301){
  const newTotal=700;
  setTotal(newTotal)
 }
 else if(quantity<=401){
  const newTotal=5000;
  setTotal(newTotal)
 }
 else if(quantity<=501){
  const newTotal=8000;
  setTotal(newTotal)
 }
 else if(quantity<=601){
  const newTotal=10000;
  setTotal(newTotal)
 }
 else if(quantity<=701){
  const newTotal=14000;
  setTotal(newTotal)
 }
 else if(quantity<=801){
  const newTotal=5000;
  setTotal(newTotal)
 }
 else if(quantity>=800 ){
  const newTotal=30000;
  setTotal(newTotal)
 }
 else {
  const newTotal=0;
  setTotal(newTotal)
 }

 }, [size, Total, printingSides,papertype,quantity])
 


  return (
    <div>
    <p>A3 Prints<span>(A3 PRINTS)</span></p>
    
    <hr />
   <h3> Price Calculator</h3>
    <hr/>


    <form>
    <div className='form-elements'>
    <p>Size</p>
    
    <select name="size" className="select"  onSelect={handleSelectedSize}>
       <option>{size[0]}</option>
       <option>{size[1]}</option>       
    </select>
    </div>

    <div className='form-elements'>

    <p>Quantity</p>
    <input type="number" value={quantity} onChange={(e)=>setQuantity(parseInt(e.target.value) )}></input>
    

    </div>

    <div className='form-elements'>

    <p>Printing Sides</p>
    <select name="size" className="select"  onSelect={handleSelectedPrintingSides}>
       <option>130 Gloss/Matt</option>
       <option>150 Gloss/Matt</option>       
       <option>170 Gloss/Matt</option>
       <option>130 Matt</option>       
    </select>
    </div>
    <div className='form-elements'>

    <p>Paper Type</p>
    <select name="size" className="select"  onSelect={handleSelectedPaperType}>
       <option>4 color(single-side)</option>
       <option>4 color(double-side)</option>
       <option>B/W(single-side)</option>
       <option>B/W(Double-sides)</option>
      
    </select>
    </div>
    <div className='form-elements'>
    </div>
    <h2>Total:{Total}</h2>
    <Link to='/checkout'>
    <Button>Proceed to Pay
    <div className='paybtn'>
    </div>
    </Button>
</Link>
    
    </form>
    

    <div>
        <h3>What would you like to do?</h3>
        <div className='upload'>
        <a href="mailto:email@example.com">Upload the Design</a>
        </div>
        <div className='upload'>
        <a href="mailto:email@example.com">Upload the wireframe</a>
        </div>
         
        
    </div>
    
    </div>
  )
}


export default Calculator