import { signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { auth } from "../Firebase/firebase"

 
const provider = new GoogleAuthProvider();

export const SignIn = () =>{

return (signInWithPopup(auth, provider)
.then((result) => {
    const user = result.user;
    localStorage.setItem('name', user.displayName);
    localStorage.setItem('email', user.email);
    localStorage.setItem('image', user.photoURL);
    console.log(user);
    user?window.location.href = "/welcome":window.location.href = "/login";
    
}).catch((error) => {
    const errorMessage = error.errorMessage;
    console.log(errorMessage);
}));}


export const SignOut = () => {
    signOut(auth).then(()=>{
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
    window.location.href = "/login"; 
    }).catch((error)=>{
        console.log(error);
    })
}


