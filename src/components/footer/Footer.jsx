import React from 'react'
import './footer.css'
import {RiFacebookLine, RiTwitterLine} from 'react-icons/ri'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TERRY'S</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li> 
        <li><a href='#about'>About</a></li> 
        <li><a href='#experience'>Experience</a></li> 
        <li><a href='#services'>Services</a></li> 
        <li><a href='#testimonials'>Testimonials</a></li> 
        <li><a href='#contact'>Contact</a></li> 
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><RiFacebookLine/></a>
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://twitter.com"><RiTwitterLine/></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer