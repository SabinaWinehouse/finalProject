import { useEffect } from "react";
import Input from "../Input/Input";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import useFormValidation from "../../hooks/useFormValidation";

const Login = ({
  isOpened,
  closePopup,
  handleLogin,
  type,
  openRegisterPopup,
}) => {
  const { values, handleChange, errors, isValid, handleFormReset } = useFormValidation();

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin();
  }

  useEffect(() => {
    handleFormReset()
  }, [isOpened, handleFormReset])

  return (
    <PopupWithForm
      isOpened={isOpened}
      onClose={closePopup}
      onSubmit={handleSubmit}
      type={type}
      onLinkClick={openRegisterPopup}
      isValid={isValid}
    >
      <Input
        type="email"
        name="email"
        placeholder="Enter email"
        label="Email"
        minLength="2"
        onChange={handleChange}
        value={values.email || ''}
        errorText={errors.email || ''}
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        label="Password"
        minLength="6"
        onChange={handleChange}
        value={values.password || ''}
        errorText={errors.password || ''}
      />
    </PopupWithForm>
  );
};

export default Login;
