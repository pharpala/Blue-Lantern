import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='logo'/>
        <ul>
            <li> Home </li>
            <li> Features </li>
            <li> Pricing </li>
            <li> Blog </li>
        </ul>
        <div className="nav-right">
            <select>
            <option values='cad'> CAD </option>
            <option values='usd'> USD </option>
            <option values='eur'> EUR </option>
            </select>
            <button> Sign up <img src={arrow_icon} /></button>
        </div>
    </div>
  )
}

export default Navbar
