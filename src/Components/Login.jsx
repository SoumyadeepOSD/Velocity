import GoogleButton from "react-google-button"
import { SignIn } from "../Contexts/AuthContext"

function Login() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"10%"}}>
        <GoogleButton
         onClick=
         {
           SignIn
         }/>
    </div>
  )
}

export default Login