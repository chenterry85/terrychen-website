import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Playlist from './components/playlist/Playlist'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Playlist />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App