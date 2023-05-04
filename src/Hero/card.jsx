import '../index.css';
import {FaCircle} from 'react-icons/fa';

const Card = () => {

  return (
    <div className="card-container"> 
        <section className="card-section">
            <span><FaCircle className='circle' size={15} color='#6946FF'/>Scalable</span>
            <span><FaCircle className='circle'  size={15} color='#6946FF'/>Smooth</span>
            <span><FaCircle className='circle'  size={15} color='#6946FF'/>Powerful</span>      
        </section>
        <img id='card-workflow' src="src/assets/card_image.png" alt="" />
    </div>
  )
}

export default Card