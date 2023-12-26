import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";

import '../../styles/mixin.css';
import '../../blocks/title.css';
import "./NewsCardsList.css";

const NewsCardsList = ({ cards }) => {
  return (
    <section className="cards-list flex flex-col align-center">
      <div className="cards-list__overlay flex flex-col align-center">
        <h3 className="cards-list__title title title_size_m align-self-start">Search Results</h3>
        <ul className="cards-list__list flex flex-wrap">
          {cards.map((card) => (
            <li className="cards-list__list-item" key={card.title}>
              <NewsCard card={card} />
            </li>
          ))}
        </ul>
      </div>
      <Button type="button" label="Show more" appearance="secondary" />
    </section>
  );
};

export default NewsCardsList;
