import { SignOut } from "../Contexts/AuthContext";

function Welcome() {

    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const image = localStorage.getItem('image');


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly"}}>
        <h1 style={{textAlign:"center", margin:"2rem"}}>Login</h1>
        <p>{email}</p>
        <p>{name}</p>
        <img src={image} alt="img" />
        <button onClick={SignOut}>log out</button>
        <p>Hello</p>
    </div>
  )
}

export default Welcome