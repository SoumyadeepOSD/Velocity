import '../Components/sidebarstyle.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineAlignLeft, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from "framer-motion"
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}


const Sidebar = ({ name, image }) => {
    const [ontap, setOntap] = useState(false);
    const TapMenu = () => {
        setOntap(!ontap);
    }
    return (
        <div className='getting-started'>
            {
                ontap ? (<motion.div
                    animate={ontap ? "open" : "closed"}
                    variants={variants}
                    className='panel'>
                    <AiOutlineClose onClick={TapMenu} size={30} />
                    <section className='top-profile'>
                        <img src={image} alt="img" id='profile-pic' />
                    </section>
                    <section className='drawer-tabs'>
                        <Link className='tab'>Option1</Link>
                        <Link className='tab'>Option1</Link>
                        <Link className='tab'>Option1</Link>
                        <Link className='tab'>Option1</Link>
                        <Link className='tab'>Option1</Link>
                    </section>
                </motion.div>
                ) : null
            }

            <div className='canvas'>
                <section className='canvas-menu'>
                    {
                        ontap
                            ? null
                            : (<AiOutlineAlignLeft color='white' onClick={TapMenu} size={30} />)
                    }
                    <p className='tab margin'>Welcome, {name.split(' ')[0]}</p>
                </section>
            </div>
        </div>
    )
}

export default Sidebar;


Sidebar.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}