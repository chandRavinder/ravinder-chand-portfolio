import React from 'react';
import './navbar.css';
// import profile from '../../assets/Ravinder-Profile.png'
// import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm justify-content-around">
            {/* <img src={profile} alt='LogoImage' className='logo' /> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <p className='my-name'>Ravinder Chand</p>
                </li>
            </ul>
                
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="desktopListItem" to=''>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="desktopListItem" to=''>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="desktopListItem" to=''>Certification</Link>
                </li>
                <li className="nav-item">
                    <Link className="desktopListItem" to=''>Contact</Link>
                </li>
                <li className="nav-item">
                    {/* <button className='hire-me-button'> */}
                        <Link className="desktopListItem" to=''>Hire Me</Link>
                    {/* </button> */}
                </li>
            </ul>
            
            {/* <button className='desktopMenuBtn'>
                <img src={contactImg} alt='ContactImage' className='desktopMenuImg' />Contact Me
            </button> */}
            
        </nav>
    )
}

export default Navbar;