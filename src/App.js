import './App.css';
import NavBar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Projects from './Components/Projects.js';
import Tools from './Components/Tools.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className='body'>
      <NavBar />
      <Header />
      <div className="projects-title-container">
        <h2 className="title">Projects</h2>
      </div>
      <Projects />
      <div className="tools-title-container">
        <h2 className="title">Tools</h2>
      </div>
      <Tools />
      <Footer />
    </div>
  );
}

export default App;
