import { useEffect } from "react";
import Input from "../Input/Input";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormValidation from "../../hooks/useFormValidation";

const Register = ({ isOpened, closePopup, handleRegister, type, openLoginPopup }) => {
  const { values, handleChange, errors, isValid, handleFormReset } = useFormValidation();

  const handleSubmit = e => {
    e.preventDefault();
    handleRegister();
  }

  useEffect(() => {
    handleFormReset()
  }, [isOpened, handleFormReset])

  return (
    <PopupWithForm
      isOpened={isOpened}
      onClose={closePopup}
      type={type}
      onSubmit={handleSubmit}
      onLinkClick={openLoginPopup}
      isValid={isValid}
    >
      <Input
        type="email"
        name="register-email"
        placeholder="Enter email"
        label="Email"
        minLength="2"
        onChange={handleChange}
        value={values.email || ''}
        errorText={errors.email || ''}
      />
      <Input
        type="password"
        name="register-password"
        placeholder="Enter password"
        label="Password"
        minLength="6"
        onChange={handleChange}
        value={values.password || ''}
        errorText={errors.password || ''}
      />
      <Input
        type="text"
        name="username"
        placeholder="Enter your username"
        label="Username"
        minLength="2"
        onChange={handleChange}
        value={values.username || ''}
        errorText={errors.username || ''}
      />
    </PopupWithForm>
  );
};

export default Register;
