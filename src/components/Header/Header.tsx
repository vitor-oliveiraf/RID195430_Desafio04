import "./Header.css";
import linkedin from "../../assets/icon-linkedin.svg";
import github from "../../assets/icon-github.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="container container-header">
        <nav className="header-buttons">
          <Link className="header-button" to="/projetos">
            Projetos
          </Link>
          <Link className="header-button" to="/tecnologias">
            Tecnologias
          </Link>
          <Link className="header-button" to="/sobre-mim">
            Sobre mim
          </Link>
        </nav>
        <div className="header-icons">
          <Link target="_blank" to="https://github.com/vitor-oliveiraf">
            <img className={"header-icon"} src={github} alt="Github" />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/vitor-oliveira-2ab261137/"
          >
            <img className={"header-icon"} src={linkedin} alt="Linkedin" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
