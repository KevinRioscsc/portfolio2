import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub, BsFillFilePersonFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {Contact, ContactList, ContactItem} from './sidebar.js'
import resume from '../Resume/Kevin-Rios.pdf'


const SideBar = () => {
  return (
    <div>
        <Contact>
            <ContactList>
                <ContactItem>
                    <a href="https://www.linkedin.com/in/kevin-rios-16558919a/" className='linkedin block' target={'_blank'}>
                        <span className='contact__label'>Linkedin</span>
                        <ImLinkedin size={30} className ='svg'/>
                    </a>
                </ContactItem>
                <ContactItem>
                    <a href="https://github.com/KevinRioscsc" className='github block' target={'_blank'}>
                        <span className='contact__label'>Github</span>
                        <BsGithub size={30} className ='svg'/>
                    </a>
                </ContactItem>
                <ContactItem>
                    <a href={resume} className='resume block' target={'_blank'}>
                        <span className='contact__label'>Resume</span>
                        <BsFillFilePersonFill size={30} className ='svg'/>
                    </a>
                </ContactItem>
            </ContactList>
        </Contact>
    </div>
  )
}

export default SideBar