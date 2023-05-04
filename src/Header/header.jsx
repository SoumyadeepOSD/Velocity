import '../index.css'
import {FaAngleDown} from "react-icons/fa";

const Header = () =>
{
  return (
    <div className='header margin'>
      {/* logo */}
        <section>
          <img id="logo" src="src/assets/velocity_fire.jpg" alt="logo" />
          <span>velocity.io</span>
        </section>
      {/* logo */}
      {/* tabs */}
      <section id='tabs'>
        <ul>
          <li>Services<span><FaAngleDown color='black' size="12"/></span></li>
          <li>Tools</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section>
      {/* tabs */}
    </div>
  )
}

export default Header;