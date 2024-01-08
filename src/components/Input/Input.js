import '../../styles/mixin.css';
import './Input.css';

const Input = ({ type, label, name, errorText, minLength, placeholder, onChange }) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        onChange={onChange}
        className="input__input w-full"
        name={name}
        minLength={minLength}
        maxLength="50"
        placeholder={placeholder}
        required
      />
      <span className="input__error">{errorText}</span>
    </div>
  );
};

export default Input;
