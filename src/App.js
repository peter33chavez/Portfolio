import './App.css'
import NavBar from './Components/NavBar.js'
import Header from './Components/Header.js'
import Projects from './Components/Projects.js'
import Tools from './Components/Tools.js'
import Footer from './Components/Footer.js'
import Titles from './Components/Titles.js'

function App() {
  return (
    <div className='body'>
      <NavBar />
      <Header />
      <Titles container='projects-title-container' title='Projects'/>
      <Projects />
      <Titles container='tools-title-container' title='Tools' />
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
