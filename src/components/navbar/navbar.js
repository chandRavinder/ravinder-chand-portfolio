import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid nav-container">
                <div className='row'>
                    <div className='col-sm-6'>
                        <p className='my-name'>Ravinder Chand</p>
                    </div>
                    <div className='col-sm-6'>
                        <button className="navbar-toggler btn-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse float-end" id="navbarNav">
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
                                    <Link className="desktopListItem" to=''>Hire Me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;