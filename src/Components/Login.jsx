import {useState} from "react";
import MyButton from "./Button"
import '../index.css';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Register = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <section>
          <img id="logo" src="src/assets/velocity_fire.jpg" alt="logo" />
          <span>velocity.io</span>
        </section>
        <section  className="login-container">
            <p className="tag-line">Register</p>
            <div className="login-card">
                <input 
                className="ip" 
                name="userName" 
                placeholder="User Name" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                className="ip" 
                name="userPassword" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <div className="lower">
                    <MyButton name="Sign Up" click={Register}/>
                    <p>or</p>
                    <p className="login-text">
                        Sign in with 
                        <img src="src/assets/google.png" height="20" width="20" alt="google" />
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login