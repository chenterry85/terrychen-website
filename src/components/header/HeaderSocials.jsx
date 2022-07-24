import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/terryc85/" target="_blank"><ImLinkedin/></a>
      <a href="https://github.com/chenterry85" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/terry.chenn/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials