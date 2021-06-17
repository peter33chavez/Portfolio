import Logo from '../Images/Name-text.png';
import GitHub from '../Images/Icon-github.svg';
import Twitter from '../Images/Icon-twitter.svg';
import LinkedIn from '../Images/Icon-linkedin.svg';
import ConnectForm from './ConnectForm.js';
const NavBar = () => {
    const Connect = () => {
        console.log('Clicked');
        //when clicked show ConnectForm.js
    }
    return (
        <nav>
            <div className="nav-container">
                <div className="img-container">
                    <img src={Logo} alt="Name Logo" className="logo" />
                </div>
                <ul className="nav-item-container">
                    <li className="nav-item">
                        <a href="#projects" className="link">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="link">About</a>
                    </li>
                    <li className="nav-item" onClick={Connect}>
                        <text className='link'>Connect</text>
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
            </div>
        </nav>
    )
}

export default NavBar
