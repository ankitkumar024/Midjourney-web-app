import './navbar.css'
import logo from '../../assets/Logo.png'
import React from 'react'

const navbar = () => {
  
  return (
    <nav>
      <div className='blur'></div>

      <div className='logo'>
        <img className='nav_logo' src={logo} alt="logo" />
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Browse</a></li>
        <li><a href="#">Updates</a></li>
        <li><a href="#">Pricing</a></li>
        
        <div>
          <button className='signUp'>Sign Up</button>  
        </div>

      </ul>
    </nav>
  )
}

export default navbar