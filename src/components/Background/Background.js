import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

import './Background.css'

const Background = ({ onOpen }) => {
  return (
    <div className="background">
      <Header onOpen={onOpen} />
      <SearchForm />
    </div>
  )
}

export default Background;