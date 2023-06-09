import {FaTwitter, FaLinkedin, FaInstagram, FaMailBulk, FaDiscord, FaYoutube} from "react-icons/fa"

function Contact() {



  return (
    <div className="contact-container">
        <div className="section-label">
            Contact Us
        </div>
        <div className="contact-section">
            <section>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Blogs</li>
                </ul>
            </section>


            <section id="socials">
                <a href="https://twitter.com/SoumyadeepDasB6"><li><FaTwitter/></li></a>
                <a href="https://www.linkedin.com/in/soumyadeep-das-bhowmick-01a882234/"><li><FaLinkedin/></li></a>
                <a href="/"><li><FaInstagram/></li></a>
                <a href="/"><li><FaMailBulk/></li></a>
                <a href="/"><li><FaDiscord/></li></a>
                <a href="https://youtube.com/@Open-Container"><li><FaYoutube/></li></a>
            </section>
        </div>
        <div id="copyright">Copyright © 2023 velocity.io, All rights reserved.</div>
    </div>
  )
}

export default Contact