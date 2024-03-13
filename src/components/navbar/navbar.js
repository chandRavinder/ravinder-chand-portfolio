import React from 'react';
import './navbar.css';
import profile from '../../assets/Ravinder-Profile.png'
// import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    // <nav className='navbar'>
    //     <img src={profile} alt='LogoImage' className='logo' />

    //     <div className='desktopMenu'>
    //         <Link className="desktopListItem">Home</Link>
    //         <Link className="desktopListItem">About</Link>
    //     </div>

    //     <button className='desktopMenuBtn'>
    //         <img src={contactImg} alt='ContactImage' className='desktopMenuImg' />Contact Me
    //     </button>
    // </nav>
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
        <img src={profile} alt='LogoImage' className='logo' />

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="desktopListItem" to=''>Home</Link>
            </li>
            <li className="nav-item">
                <Link className="desktopListItem" to=''>About</Link>
            </li>
            <li className="nav-item">
                <Link className="desktopListItem" to=''>Contact</Link>
            </li>
        </ul>
        
        {/* <button className='desktopMenuBtn'>
            <img src={contactImg} alt='ContactImage' className='desktopMenuImg' />Contact Me
        </button> */}
        
    </nav>
  )
}

export default Navbar