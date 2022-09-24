import React from 'react'
import {Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
  return (
    <div className='links'>
    <div className='link1'>
    <Link to="/" className='link'>Calculator</Link>
    </div>
    <div className='link2'>
    <Link to="/pricing" className='link'>Pricing</Link>
    </div>
   
    </div>
  )
}

export default NavBar