import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='LogoImage' className='logo' />

        <div className='desktopMenu'>
            <Link className="desktopListItem">Home</Link>
            <Link className="desktopListItem">Clients</Link>
            <Link className="desktopListItem">About</Link>
            <Link className="desktopListItem">Portfolio</Link>
        </div>

        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='ContactImage' className='desktopMenuImg' />Contact Me
        </button>
    </nav>
  )
}

export default Navbar