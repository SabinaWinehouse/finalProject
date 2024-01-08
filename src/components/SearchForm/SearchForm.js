import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';

import '../../styles/mixin.css';
import '../../blocks/title.css';
import './SearchForm.css'

const SearchForm = () => {
  return (
    <section className="search-section relative">
      <div className="search-section__overlay relative flex flex-col align-center">
        <div className="search-section__text flex flex-col align-start">
          <h1 className="title title_size_l title_color_white">
            What&apos;s going on in the world?
          </h1>
          <Paragraph color="white">
            Find the latest news on any topic and save them in your personal
            account.
          </Paragraph>
        </div>
        <form className="search-section__form w-full">
          <input className="search-section__input w-full" />
          <Button type="submit" label="Search" appearance="primary-search" />
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
