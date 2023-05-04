import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
    </div>
  );
}

export default App