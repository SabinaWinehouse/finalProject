import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import CrossIcon from "../../images/icons/cross.svg";

import "../../styles/mixin.css";
import '../../blocks/title.css';
import '../../blocks/modal.css';
import "./PopupWithForm.css";

const PopupWithForm = ({
  children,
  isOpened,
  onClose,
  onSubmit,
  type,
  onLinkClick,
  isValid,
}) => {
  const computeFormData = () => {
    switch (type) {
      case "register":
        return ["Sign up", "Sign in"];
      case "success":
        return ["Registration successfully completed!", "Sign in"];
      case "login":
        return ["Sign in", "Sign up"];
      default:
        return [];
    }
  };

  const [title, linkLabel] = computeFormData();

  return (
    <div
      className={`modal ${isOpened && "modal_opened"} w-full h-full flex flex-center`}
    >
      <form
        className={`popup__form popup__form_type_${type} relative flex flex-col justify-between`}
        onSubmit={onSubmit}
      >
        <button className="popup__close-button btn absolute" onClick={onClose}>
          <img src={CrossIcon} alt="Close popup" className="popup__close-button-img" />
        </button>
        <h2 className="title title_type_form">{title}</h2>
        <fieldset className="popup__fieldset">{children}</fieldset>
        <Button
          type="submit"
          label="Sign in"
          appearance="primary"
          disabled={!isValid}
        />
        <Paragraph
          fontFamily="inter"
          fontSize="xs"
          className="align-self-center"
        >
          or{" "}
          <span className="popup__link" onClick={onLinkClick}>
            {linkLabel}
          </span>
        </Paragraph>
      </form>
    </div>
  );
};

export default PopupWithForm;
