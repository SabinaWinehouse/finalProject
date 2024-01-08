import "../../styles/mixin.css";
import "./Button.css";

const Button = ({ type, label, appearance, className, onClick, disabled }) => {
  const buttonClassName = `button button_type_${appearance} ${className || ""} btn`;

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
