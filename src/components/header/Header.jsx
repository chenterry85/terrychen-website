import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, this is </h5>
        <h1>Terry Chen</h1>
        <h5 className="test-light">Software Developer</h5> 
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">— scroll down</a>
      </div>


    </header>
  )
}

export default Header