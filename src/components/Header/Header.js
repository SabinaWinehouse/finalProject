import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";
import BurgerMenuIcon from "../../images/icons/burger_menu.svg";
import CrossIcon from "../../images/icons/cross.svg";

import "../../styles/mixin.css";
import "./Header.css";

const Header = ({ onOpen, isPopupOpened }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const checkScreenWidth = () => {
      const screenWidth = window.matchMedia("(max-width: 520px)");

      screenWidth.matches ? setIsMobile(true) : setIsMobile(false);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  });

  useEffect(() => {
    const handleCloseFromOverlay = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setIsMenuOpened(false);
      }
    };

    window.addEventListener("click", handleCloseFromOverlay);
    return () => window.removeEventListener("click", handleCloseFromOverlay);
  });

  useEffect(() => {
    const handleCloseByEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpened(false);
      }
    };
    document.addEventListener("keydown", handleCloseByEscape);
    return () => document.removeEventListener("keydown", handleCloseByEscape);
  }, []);

  const renderCrossIcon = () => {
    if (!isPopupOpened) {
      return (
        <img
          src={BurgerMenuIcon}
          alt="Open mobile menu"
          onClick={() => setIsMenuOpened(true)}
          className="header__button-img"
        />
      );
    } else return null;
  };

  const renderMenu = () => {
    if (isMobile) {
      return (
        <>
          {isMenuOpened ? (
            <img
              src={CrossIcon}
              alt="Close mobile menu"
              onClick={() => setIsMenuOpened(false)}
              className="header__button-img"
            />
          ) : (
            renderCrossIcon()
          )}
          <MobileMenu onOpen={onOpen} isOpened={isMenuOpened} />
        </>
      );
    } else {
      return (
        <nav className="header__navigation flex align-center">
          <ul className="header__links flex align-center">
            <NavLink className="header__link" to="/" exact>
              Home
            </NavLink>
            <NavLink className="header__link" to="/saved-news">
              Saved Articles
            </NavLink>
          </ul>
          <Button
            type="button"
            label="Sign In"
            appearance="transparent"
            onClick={onOpen}
          />
        </nav>
      );
    }
  };

  return (
    <header className="header flex justify-between align-center relative">
      <p className="header__title m-0">NewsExplorer</p>
      {renderMenu()}
    </header>
  );
};

export default Header;
