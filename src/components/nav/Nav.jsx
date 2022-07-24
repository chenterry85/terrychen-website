import React from 'react'
import './nav.css'
import {RiHome5Line, RiUser4Line, RiContactsBookLine, RiServiceLine, RiMessageLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={()=>setActiveNav('#')}><RiHome5Line/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><RiUser4Line/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={()=>setActiveNav('#experience')} ><RiContactsBookLine/></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={()=>setActiveNav('#services')}><RiServiceLine/></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={()=>setActiveNav('#contact')}><RiMessageLine/></a>
    </nav>
  )
}

export default Nav