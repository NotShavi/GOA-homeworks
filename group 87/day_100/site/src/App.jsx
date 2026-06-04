import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div id="container">
      <h3 id="skilled">skilled</h3>
      <div id="started">
        <button id="startedb">Get Started</button>
      </div>
      <div id="image"></div>
      <div id="text1">
        <h1 id="minimize">Maximize skill, minimize budget</h1>
        <p id="text1p1">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button id="startedpink">Get Started</button>
      </div>
      <div id="contmain"></div>
      <div id="main">
        <div id="box1">
          <p id="box1p">Check out our most popular courses!</p>
        </div>
        <div id="box2">
          <img className='logo' src="Group 8.png" alt="" />
          <h3 className="animation">Animation</h3>
          <p className="learn">
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <p className="get">Get Started</p>
        </div>
        <div id="box3">
          <img className='logo' src="Group1.png" alt="" />
          <h3 className="animation">Design</h3>
          <p className="learn">
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <p className="get">Get Started</p>
        </div>
        <div id="box4">
          <img className='logo' src="Group2.png" alt="" />
          <h3 className="animation">Photography</h3>
          <p className="learn">
            Explore critical fundamentals like lighting, composition, and focus
            to capture exceptional photos.
          </p>
          <p className="get">Get Started</p>
        </div>
        <div id="box5">
          <img className='logo' src="Group3.png" alt="" />
          <h3 className="animation">Crypto</h3>
          <p className="learn">
            All you need to know to get started investing in crypto. Go from
            beginner to advanced with this 54 hour course.
          </p>
          <p className="get">Get Started</p>
        </div>
        <div id="box6">
          <img className='logo' src="Group4.png" alt="" />
          <h3 className="animation">Business</h3>
          <p className="learn">
            A step-by-step playbook to help you start, scale, and sustain your
            business without outside investment.
          </p>
          <p className="get">Get Started</p>
        </div>
      </div>
      <footer>
        <h2 id="footerskilled">skilled</h2>
        <button id="footerb">Get Started</button>
      </footer>
    </div>
    </>
  )
}

export default App
