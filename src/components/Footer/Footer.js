import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Paragraph from "../Paragraph/Paragraph";
import GithubIcon from "../../images/icons/github.svg";
import FacebookIcon from "../../images/icons/fb.svg";

import "../../styles/mixin.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer grid">
      <Paragraph color="gray" fontSize="s" className="footer__copyright">
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </Paragraph>
      <ul className="footer__text-links flex">
        <NavLink className="footer__link" to="/">
          Home
        </NavLink>
        <li className="footer__link">
          <a href="https://practicum.com/" target="_blank" rel="noreferrer">
            Practicum
          </a>
        </li>
      </ul>
      <ul className="footer__icon-links flex">
        <li className="footer__link">
          <a
            href="https://github.com/SabinaWinehouse"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__icon footer__icon_type_github"
              src={GithubIcon}
              alt="Github Icon"
            />
          </a>
        </li>
        <li className="footer__link">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img
              className="footer__icon footer__icon_type_facebook"
              src={FacebookIcon}
              alt="Facebook Icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
