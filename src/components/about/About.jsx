import React from 'react'
import './about.css'
import ME from './../../assets/dp.png'
import {IoIosCodeWorking} from 'react-icons/io'
import {IoSchoolOutline} from 'react-icons/io5'
import {RiHomeHeartLine} from 'react-icons/ri'

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
              <RiHomeHeartLine className='about__icon'/>
              <h5>Home</h5>
              <small>Taipei, Taiwan</small>
            </article>
            <article className='about__card'>
              <IoSchoolOutline className='about__icon'/>
              <h5>Education</h5>
              <small>CSBA @ USC</small>
            </article>
            <article className='about__card'>
              <IoIosCodeWorking className='about__icon'/>
              <h5>Work</h5>
              <small>2+ years SWE</small>
            </article>
          </div>

          <p>
            Hey there, this is Terry! I'm currently a sophomore studying computer science and business at USC. In my free time, I enjoy playing tennis, golf, travel, watching sports & learning new things.
          </p>
          
          <a href="#contact" className='btn btn-primary'>let's chat</a>
        </div>
      </div>
    </section>
  )
}

export default About