import React from 'react'
import {NavLink} from 'react-router-dom'
import fiveGuysLogo from '../assets/fiveguys2.png'
import "../styles/Cart.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_main'>
            <img src={fiveGuysLogo}></img>
            <nav className='navbar_link'>
            <NavLink to='/about'> Hakkında </NavLink>
            <NavLink to='/contact'> İletişim </NavLink>
            <NavLink to='/'> Anasayfa </NavLink>
            <NavLink to='/menu'> Menu </NavLink>
            </nav> 
        </div>
    </div>
   
  )
}

export default Navbar