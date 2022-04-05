import React from 'react'
import ContactMe from '../Contact'
import { Fade } from 'react-reveal'

const Contact = () => {
  return (
    <div className='main'> 
        <Fade>
            <h2 className='second-header small'>Coffee?</h2>
            <sub className='secondary-sub small2'>Ask me anything! Ill get back to you as soon as possible.</sub>
        <ContactMe/>
        </Fade>
    </div>
  )
}

export default Contact