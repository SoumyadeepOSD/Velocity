/* eslint-disable no-unused-vars */
import { SignOut } from "../Contexts/AuthContext";
import Sidebar from "./Sidebar";

function Welcome() {

    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const image = localStorage.getItem('image');


  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <Sidebar name={name} image={image}/>
    </div>
  )
}

export default Welcome

