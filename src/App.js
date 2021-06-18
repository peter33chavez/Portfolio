import './App.css'
import NavBar from './Components/NavBar.js'
import Header from './Components/Header.js'
import Projects from './Components/Projects.js'
import Tools from './Components/Tools.js'
import Footer from './Components/Footer.js'
import Titles from './Components/Titles.js'
import ConnectForm from './Components/ConnectForm.js'
import { useState } from 'react'


function App() {

  const [Connect, setConnect] = useState(false);

  return (
    <div className='body'>
      <main>
        <NavBar showForm={() => setConnect(true)}/>
        <Header />
        <Titles container='projects-title-container' title='Projects'/>
        <Projects />
        <Titles container='tools-title-container' title='Tools' />
        <Tools />
        <Footer showForm={() => setConnect(true)}/>
      </main>
      <ConnectForm trigger={Connect} closeBtn={setConnect}/>
    </div>
  );
}

export default App;
