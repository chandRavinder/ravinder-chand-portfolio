import React from 'react';
import './intro.css';
import bg from '../../assets/Profile.png';
import btnImg from '../../assets/hireMe.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introText'> I'm 
                <span className='introName'> Ravinder</span>
                <br /> Full-stack Developer
            </span>
            <p className='introPara'>I am a skilled full stack developer with 2+ years of experience</p>

            <Link><button className='hireBtn' alt='Hire'><img src={btnImg} alt='hire me' className='btnImg' /> Hire me</button></Link>
        </div>
        
        <img src={bg} alt='Profile' className='bg' />
        
    </section>
  )
}

export default Intro