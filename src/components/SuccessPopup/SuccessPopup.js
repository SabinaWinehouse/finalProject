import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SuccessPopup = ({ isOpened, closePopup, type, openLoginPopup }) => {
  return (
    <PopupWithForm
      isOpened={isOpened}
      onClose={closePopup}
      type={type}
      onLinkClick={openLoginPopup}
    />
  );
};

export default SuccessPopup;
