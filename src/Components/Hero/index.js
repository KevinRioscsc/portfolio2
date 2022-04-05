import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
const Hero = () => {
  return (
    <div className='about'>
        <Fade top>
        <h1 className='primary-header'><span>HEY, I'M</span><ul className='glow_text'>
            <li>
                <input type="checkbox" />
                <div className='letter'>K</div>
            </li>
            <li>
                <input type="checkbox" />
                <div className='letter'>E</div>
            </li>
            <li>
                <input type="checkbox" />
                <div className='letter'>V</div>
            </li>
            <li>
                <input type="checkbox" />
                <div className='letter'>I</div>
            </li>
            <li>
                <input type="checkbox" />
                <div className='letter'>N</div>
            </li>
            </ul></h1>
        <p className='descr'> I'm a full stack developer with the passion to create</p>
        <p className='descr'>Contact me and let's create something special</p>

        <Link to={'/projects'}><button>VIEW PROJECTS</button></Link>
        </Fade>
    </div>
  )
}

export default Hero