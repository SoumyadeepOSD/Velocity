import PropTypes from 'prop-types';
import '../index.css';
import { Link } from "react-router-dom";

const MyButton = ( {name, click }) => {
    return (
        <button className='btn' onClick={click}>
           <Link id='btn' to="login">{name}</Link>
        </button>
    );
  }
  MyButton.propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
  }

export default MyButton;