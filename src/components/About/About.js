import AuthorPhoto from "../../images/author.jpg";
import Paragraph from "../Paragraph/Paragraph";

import '../../styles/mixin.css';
import '../../blocks/title.css';
import "./About.css";

const About = () => {
  return (
    <section className="about w-full p-0">
      <div className="about__overlay w-full flex align-center">
        <img
          className="about__author-photo"
          alt="Author's portrait"
          src={AuthorPhoto}
        />
        <div className="about__content flex flex-col">
          <h2 className="title title_size_m">About the author</h2>
          <Paragraph>
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </Paragraph>
          <Paragraph>
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default About;
