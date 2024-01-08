import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import "../../styles/mixin.css";
import "../../blocks/modal.css";
import "./MobileMenu.css";

const MobileMenu = ({ onOpen, isOpened }) => {
  return (
    <div className={`modal ${isOpened && 'modal_opened'} w-full h-full flex flex-center`}>
      <nav className="mobile-menu absolute flex flex-col align-center w-full">
        <ul className="mobile-menu__links w-full">
          <li className="mobile-menu__link">
            <NavLink className="font font_color_white" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="mobile-menu__link">
            <NavLink className="font font_color_white" to="/saved-news">
              Saved Articles
            </NavLink>
          </li>
        </ul>
        <Button
          type="button"
          label="Sign In"
          appearance="transparent"
          onClick={onOpen}
        />
      </nav>
    </div>
  );
};

export default MobileMenu;
