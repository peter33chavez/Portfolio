import Logo from '../Images/Name-text.png';
import GitHub from '../Images/Icon-github.svg';
import Twitter from '../Images/Icon-twitter.svg';
import LinkedIn from '../Images/Icon-linkedin.svg';
import Connect from './Connect.js';
const NavBar = () => {
    return (
        <nav>
            <img src={Logo} width='120px' height='40px' alt="Name Logo" className="logo" />
            <ul className="nav-container">
                <li className="nav-item">
                    <a href="#projects" className="projects-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="about-link">About</a>
                </li>
                <li className="nav-item">
                    <a href={Connect} className="connect-link">Connect</a>
                </li>
            </ul>
            <ul className="social-container">
                <li className="social-link">
                    <a href="https://github.com/peter33chavez" className="github-link">
                        <img src={GitHub} alt="GitHub" />
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://twitter.com/DevPeter_" className="twitter-link">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </li>
                <li className="social-link">
                    <a href="https://www.linkedin.com/in/peter-chavez-375874199/" className="linkedIn-link">
                        <img src={LinkedIn} alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
