import "./NotFoundResults.css";
import NotFoundIcon from "../../images/not-found_icon.svg";
import Paragraph from "../Paragraph/Paragraph";

import '../../styles/mixin.css';
import '../../blocks/title.css';
import './NotFound.css';

const NotFoundResults = () => {
  return (
    <section className="not-found flex justify-center">
      <div className="not-found__overlay">
        <img
          className="not-found__image"
          src={NotFoundIcon}
          alt="Sad face"
        />
        <h3 className="title title_size_s">Nothing found</h3>
        <Paragraph color="gray">
          Sorry, but nothing matched your search terms.
        </Paragraph>
      </div>
    </section>
  );
};

export default NotFoundResults;
