import GoogleButton from "react-google-button";
import { SignIn } from "../Contexts/AuthContext";
import {FaArrowLeft} from "react-icons/fa";

function Login() {
  return (
    <>
    <div className="header">
    <section className='logo'>
          <img id="logo" src="src/assets/velocity_fire.png" alt="logo" />
          <span>velocity.io</span>
    </section>
    </div>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"10%"}}>
        <GoogleButton
         onClick=
         {
           SignIn
         }/>
         <section style={{display:"flex", flexDirection:"row", alignItems:"start", background:"gray"}}>
          <FaArrowLeft size={30} style={{marginTop:10}}/>
          <p style={{fontSize:30}}>Back</p>  
         </section>
    </div>
    </>
  )
}

export default Login