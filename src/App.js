import './App.css'
import NavBar from './Components/NavBar.js'
import Header from './Components/Header.js'
import Projects from './Components/Projects.js'
import Tools from './Components/Tools.js'
import Footer from './Components/Footer.js'
import Titles from './Components/Titles.js'
import ConnectForm from './Components/ConnectForm.js'
import About from './Components/About.js'
import { useState } from 'react'


function App() {

  //state for ConnectForm toggler
  const [Connect, setConnect] = useState(false);

  return (
    <div className='body'>
      <NavBar showForm={() => setConnect(true)}/>
      <Header />
      <Titles container='projects-title-container' title='Projects'/>
      <Projects />
      <Titles container='tools-title-container' title='Tools' />
      <Tools />
      <Titles container='about-title-container' title='About' />
      <About />
      <Footer showForm={() => setConnect(true)}/>
      <ConnectForm trigger={Connect} closeBtn={setConnect}/>
    </div>
  );
}

export default App;
