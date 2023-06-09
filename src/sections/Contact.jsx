import '../index.css'
import {FaTwitter, FaLinkedin, FaInstagram, FaMailBulk, FaDiscord, FaYoutube} from "react-icons/fa"

function Contact() {



  return (
    <div className="contact-container">
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
            <li><img src="https://th.bing.com/th/id/OIP.o3vAVqUwIBUMRXDOjXwP-QHaHa?pid=ImgDet&rs=1" alt="" className='icons'/></li>
            <li><img src="https://th.bing.com/th/id/OIP.fnpobr_v8BajOKge4rPAvQHaHa?pid=ImgDet&rs=1" alt="" className='icons'/></li>
            <li><img src="https://avatars.githubusercontent.com/u/19772784?s=400&v=4" alt="" className='icons'/></li>
            <li><img src="https://th.bing.com/th/id/OIP.hEytNJptcEfnVY_q8ydInAHaHa?pid=ImgDet&rs=1" alt="" className='icons'/></li>
          </ul>
        </section>
      </div>
      <p style={{color:'white'}}>Copyright © 2023 velocity.io, All rights reserved</p>
    </div>
  )
}

export default Contact;