import React from 'react'
import './about.css'
import ME from './../../assets/dp.png'
import {IoIosCodeWorking} from 'react-icons/io'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          
          <a href="#contact" className='btn btn-primary'>let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About