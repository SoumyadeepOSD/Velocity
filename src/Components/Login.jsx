import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { SignIn } from "../Contexts/AuthContext";
import { FaArrowLeft } from "react-icons/fa";


function Login() {
  return (
    <>
      <div className="header">
        <div className='logo'>
          <img src="src/assets/velocity_fire.png" className='fire' alt="" />
          <p className='velocity'>Velocity.io</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "10%" }}>
        <div className="polka"></div>
        <GoogleButton
          onClick=
          {
            SignIn
          } />
        <section style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
          <FaArrowLeft size={30} style={{ marginTop: 10 }} />
          <p style={{ fontSize: 30 }}><Link className="tab" to="/">Back</Link></p>
        </section>
        <div className="polka"></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" d="M0,96L40,90.7C80,85,160,75,240,106.7C320,139,400,213,480,213.3C560,213,640,139,720,112C800,85,880,107,960,101.3C1040,96,1120,64,1200,74.7C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </>
  )
}

export default Login