import logo from '../assets/webprojectLOGO.png';

export default function Header() {

    return (
      <div className="header">
        <div className="navbar-container">

          <ul className="navbar-menu ">  
            <li className="navbarItem">
              <a href="#home" className="navbar-links">Project</a>
            </li>
            <li className="navbar-item">
              <a href="#experience" className="navbar-links" >Experience</a>
            </li>
            <li className="navbar-item">
              <a href="#blog" className="navbar-links" >Blog</a>
            </li>
          </ul>

          <img id="header-logo" src={logo}  alt="S"/>


          <ul className="navbar-menu ">  
            <li className="navbar-item">
              <a href="#about" className="navbar-links">About</a>
            </li>
            <li className="navbar-item">
              <a href="#passion" className="navbar-links" >Passion</a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-links" >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }