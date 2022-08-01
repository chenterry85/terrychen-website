import React from 'react'
import './playlist.css'

const Playlist = () => {
  return (
    <section id='playlist'>
      <div className='container playlist__container'>
      <div className='playlist__text'>
        <h2>My favorite songs.</h2>
      </div>
      <div className='playlist__spotify'>

        <iframe src="https://open.spotify.com/embed/playlist/1yxG1z5lT76jGBHOddpQ0j?utm_source=generator" title="playlist" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" class="rounded-2xl shadow-xl shadow-indigo-400 h-120 grow max-w-sm hover:shadow-indigo-500 transition-all duration-300 ease-in-out"></iframe>
      </div>
      </div>
    </section>
  )
}

export default Playlist