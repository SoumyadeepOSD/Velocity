import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home";
import Welcome from "./Components/Welcome";



function App() {

  const email = localStorage.getItem('email');
  const name = localStorage.getItem('name');
  const image = localStorage.getItem('image');

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
        <Route 
        path={(email!=null&&name!=null&&image!=null)?
        "welcome"
        :"/login"}
        element={ 
        email!=null&&name!=null&&image!=null?<Welcome/>:<Login/>
         } />
      </Routes>
    </div>
  );
}

export default App