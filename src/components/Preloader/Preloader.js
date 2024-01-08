import Paragraph from "../Paragraph/Paragraph";
import "./Preloader.css";

const Preloader = () => {
  return (
    <section className="preloader">
      <div className="preloader__overlay">
        <i className="circle-preloader"></i>
        <Paragraph color='gray'>Searching for news...</Paragraph>
      </div>
    </section>
  );
};

export default Preloader;