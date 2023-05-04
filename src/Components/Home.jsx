import Header from "../Header/header";
import Hero from "../Hero/hero"
import Card from "../Hero/card"
import MyButton from "../Components/Button"


function Home() {
  return (
    <div className="main-container">
      <Header/>
      <div className="app-container">
      <Hero/>
        <Card/>
        <MyButton name="Get Started"/>
      </div>
    </div>
  )
}

export default Home