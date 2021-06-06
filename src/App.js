import './App.css';
import NavBar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Projects from './Components/Projects.js';
import Languages from './Components/Languages.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className='body'>
      <NavBar />
      <Header />
      <Projects />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
