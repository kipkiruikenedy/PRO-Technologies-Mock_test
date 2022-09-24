import React from 'react'
import { Button } from '@mui/material';

function Checkout() {
  return (
    <div>
    <p>You are about to make M-Pesa payment to Pro Technologies</p>
    <h2>Ksh:5000</h2>
    <p>Enter M-pesa Phone number</p>
    <input type='number' placeholder='07..........'></input>
    <Button>PAY</Button>
    

    </div>
  )
}

export default Checkout