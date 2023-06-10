import '../index.css';
import {useState, useEffect} from 'react';
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';

const useWindowSize = () => {
  const [ size, setSize ] = useState([window.innerHeight, window.innerWidth]);
  useEffect(()=>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return size;
}


const Header = () =>
{
  const [istap, setTap] = useState(false);
  const [height, width] = useWindowSize();
  const Tap = ()=>{
  setTap(!istap);
  console.log(istap);
}

  return (
      <div className='menu'>
        <div className='logo'>
          <img src="src/assets/velocity_fire.png" className='fire' alt="" />
          <p className='velocity'>Velocity.io</p>
        </div>
          {width >= 500 ? 
          (<ul style={Style.menuStyle} className='menu-items-horizontal mobile-menubar'>
          <li><a className='tab' href="">Services</a></li>
          <li><a className='tab' href="">Tools</a></li>
          <li><a className='tab' href="#about-container">About</a></li>
          <li><a className='tab' href="#contact-container">Contact</a></li>
          <li>{width}</li>
        </ul>):
        istap ?
        (<AiOutlineClose size={30} onClick={Tap}/>):
        (<AiOutlineAlignLeft size={30} onClick={Tap}/>)}
       {istap ? <ul className='mobile-menu'>
          <li><a className='tab' href="">Services</a></li>
          <li><a className='tab' href="">Tools</a></li>
          <li><a className='tab' href="#about-container">About</a></li>
          <li><a className='tab' href="#contact-container">Contact</a></li>
        </ul>
        :null}
      </div>
  )
}

export default Header;

const Style = {
  menuStyle:{

  }
};