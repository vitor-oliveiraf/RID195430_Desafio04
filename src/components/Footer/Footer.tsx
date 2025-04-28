import { Link } from "react-router-dom";
import "./Footer.css";
import githubDark from "../../assets/icon-github-light.svg";
import githubLight from "../../assets/icon-github-dark.svg";
import linkedinDark from "../../assets/icon-linkedin-light.svg";
import linkedinLight from "../../assets/icon-linkedin-dark.svg";
import figmaDark from "../../assets/icon-figma-light.svg";
import figmaLight from "../../assets/icon-figma-dark.svg";
import { useTheme } from "../../context/ThemeContext";

function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="container footer-container">
        <div className="footer-contact">
          <div className="phone">
            <p className="footer-contact-title">Meu contato:</p>
            <p className="footer-contact-text">(62) 98261-4374</p>
          </div>
          <div className="mail">
            <p className="footer-contact-title">Email:</p>
            <p className="footer-contact-text">vitoro.fabiano@gmail.com</p>
          </div>
        </div>
        <div className="footer-social">
          <Link target="_blank" to="https://github.com/vitor-oliveiraf">
            <img src={isDarkMode ? githubDark : githubLight} alt="Github" />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/vitor-oliveira-2ab261137/"
          >
            <img
              src={isDarkMode ? linkedinDark : linkedinLight}
              alt="Linkedin"
            />
          </Link>
          <Link target="_blank" to="#">
            <img src={isDarkMode ? figmaDark : figmaLight} alt="Figma" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
