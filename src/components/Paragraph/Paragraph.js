import '../../styles/mixin.css';

const Paragraph = ({ children, color, fontSize, transform, fontFamily, className }) => {
  const computeClassName = () => {
    let cn = "font";

    if (color && color !== "black") {
      cn += ` font_color_${color}`;
    }

    if (fontSize) {
      cn += ` font_size_${fontSize}`;
    }

    if (transform) {
      cn += ` font_transform_${transform}`;
    }

    if (fontFamily) {
      cn += ` font_family_${fontFamily}`;
    }

    return `${cn} ${className}`;
  };

  return <p className={computeClassName()}>{children}</p>;
};

export default Paragraph;
