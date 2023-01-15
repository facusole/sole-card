import React from 'react'
import Tilt from 'react-parallax-tilt'
import Yo from './assets/yo.jpg'
import logo from './assets/logo.svg'
import vite from './assets/vite.svg'

import { BrandLinkedin, BrandGithub, BrandHtml5, BrandCss3, BrandReact} from 'tabler-icons-react';

import './App.css'

function App() {


  return (
    <div className="App">
      <div className="bg-circle purple"></div>
      <div className="bg-circle orange"></div>
      <Tilt className='tilt-container' tiltReverse='true' transitionEasing='cubic-bezier(.05,.22,.53,.81)' perspective='3000'>
        <div className='card'>
          
          <img src={Yo} alt="Facundo Solé" className='img-size'/>

          <div className="info-container">

            <div className="info-heading">
              <h1 className='main-heading'>Facundo Solé</h1>
              <h2 className="sub-heading">Front End dev, based in Argentina</h2>
            </div>

            <ul className='info-list'>
              <li><span className="social-link">Web Portfolio<a href="http://facundosole.com.ar" target="_blank" rel="noopener noreferrer"><img className='logo-size no-select' src={logo} alt="portfolio logo" /></a></span></li>
              <li><span className='social-link'>LinkedIn <a href="https://www.linkedin.com/in/facundo-sole/" target="_blank" rel="noopener noreferrer"><BrandLinkedin className='no-select' size={32} strokeWidth={2} color={'#0072b1'}/></a></span></li>
              <li><span className='social-link'>Github <a href="https://www.linkedin.com/in/facundo-sole/" target="_blank" rel="noopener noreferrer"><BrandGithub className='no-select' size={32} strokeWidth={2} color={'#000'}/></a></span></li>
              <li><span className='social-link'>TechStack:
                <BrandHtml5 className='no-select' size={32} strokeWidth={2} color={'#e34c26'}/>
                <BrandCss3 className='no-select' size={32} strokeWidth={2} color={'#264de4'}/>
                <BrandReact className='no-select' size={32} strokeWidth={2} color={'#61DBFB'}/></span></li>
            </ul>

            <div className="bg-card-img"><img src={vite} className='vite-logo'/></div>

          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default App