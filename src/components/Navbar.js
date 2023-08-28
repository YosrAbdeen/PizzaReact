import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


function Navbar() {
  return (
    <div className="navbar">
        <div className='leftSide'>
            <img src=''></img>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>login</Link>
        </div>
      
    </div>
  )
}

export default Navbar
