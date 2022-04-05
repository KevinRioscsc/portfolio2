import React,{useState, useRef} from 'react'
import { sendForm } from '@emailjs/browser';
import './Contact.css'

const ContactMe = () => {
    const form = useRef();
    const [recieved, setRecieved] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      sendForm('service_yv2tdm7', 'template_p6kv8ym', form.current, 'user_v7bSkAJSjkEhZLdoUqKHF')
        .then((result) => {
            console.log(result.text);
            setRecieved(true)
        }, (error) => {
            console.log(error.text);
            setRecieved(false)
        });
       
    };
    return (
        <div>
            {
                !recieved
                ?
                <div className='form'>
                <form className='shadow5' ref={form} onSubmit={sendEmail}>
                
                    <input placeholder='Name' className='name' type="text" name="from_name" />
                    
                    <input placeholder='Email' className='email2' type="email" name="email" />
                
                    <textarea  className='message'  placeholder='Send Me a Message' name="message" />
                    
                    <span  className='button'><input className='btn' type="submit" value="Send" /></span>
                </form>
            </div>
            :
            <div class="wrapper"> <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            }
            
        </div>
    )
}

export default ContactMe