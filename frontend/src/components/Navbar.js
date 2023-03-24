import "./Navbar.css";
import logo from '../icons/logo.png'
import gitIcon from "../icons/github.png";
import linkedinIcon from "../icons/linkedin.png"

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg"
    >
      <div class="nav justify-content-end">
        <a class="navbar-brand" href="http://localhost:3000/">
          <img src={logo} alt="img" className="logo" />
          ClimateCast
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
              <div className="box">
                <input className="search" type="text" placeholder="Faça qualquer pergunta sobre meteorologia..." />
              </div>
            </li>
            <li class="hover">
              <a class="nav-link" href="https://www.linkedin.com/in/diogojlq/">
              <img src={linkedinIcon} alt="icon" className="git" />
              </a>
            </li>
            <li class="hover">
              <a class="nav-link" href="https://github.com/Diogojlq">
                <img src={gitIcon} alt="icon" className="git" />
              </a>  
            </li>
          </ul>
          <span class="navbar-text">Icon horario - cidade,estado,TEMP</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
