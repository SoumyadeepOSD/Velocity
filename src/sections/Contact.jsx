import '../index.css'
import {FaTwitter, FaLinkedin, FaYoutube, FaGithub} from "react-icons/fa"

function Contact() {



  return (
    <div className="contact-container" id='contact-container'>
      <p className="white">Contact Us</p>
      <div className='horizontal-partition'>
        <section className='left'>
          <ul>
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Blogs</li>
          </ul>
        </section>

        <section className='right'>
          <ul>
            <li><FaTwitter className='icons'/></li>
            <li><FaLinkedin className='icons'/></li>
            <li><FaGithub className='icons'/></li>
            <li><FaYoutube className='icons'/></li>
          </ul>
        </section>
      </div>
      <p style={{color:'white'}}>Copyright © 2023 velocity.io, All rights reserved</p>
    </div>
  )
}

export default Contact;