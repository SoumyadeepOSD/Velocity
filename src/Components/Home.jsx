import Header from "../Header/header";
import Hero from "../Hero/hero"
import Card from "../Hero/card"
import MyButton from "../Components/Button"
import Contact from "../sections/Contact";
import About from "../sections/About";



function Home() {
  return (
    <div className="main-container">
      <svg style={{zIndex:-1, position:"absolute"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5000ca" fillOpacity="0.2" d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,245.3C672,277,768,267,864,245.3C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <Header/>
      {/* <Header/> */}
      <Hero/>
      <Card/>
      <MyButton name="Get Started"/>
      <About/>
      <Contact/>
      <svg style={{zIndex:-1, position:"absolute", bottom:-10}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fillOpacity="0.7" d="M0,64L20,96C40,128,80,192,120,208C160,224,200,192,240,186.7C280,181,320,203,360,208C400,213,440,203,480,186.7C520,171,560,149,600,160C640,171,680,213,720,202.7C760,192,800,128,840,101.3C880,75,920,85,960,96C1000,107,1040,117,1080,112C1120,107,1160,85,1200,74.7C1240,64,1280,64,1320,58.7C1360,53,1400,43,1420,37.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default Home