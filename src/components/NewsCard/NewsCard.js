import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import BookmarkIcon from "../../images/icons/bookmark.svg";
import BookmarkHoverIcon from "../../images/icons/bookmark_hover.svg";
import BookmarkActiveIcon from "../../images/icons/bookmark_active.svg";
import TrashIcon from "../../images/icons/trash.svg";
import Paragraph from "../Paragraph/Paragraph";

import "../../styles/mixin.css";
import '../../blocks/title.css';
import "./NewsCard.css";

const NewsCard = ({ card }) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [bookmarkIcon, setBookmarkIcon] = useState(BookmarkIcon);
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  const atHomePage = location.pathname.split("/").at(-1) === "";

  const handleMouseEnter = () => {
    setTooltipShown(true);
    if (!isSaved) setBookmarkIcon(BookmarkHoverIcon);
  };

  const handleMouseLeave = () => {
    setTooltipShown(false);
    if (!isSaved) setBookmarkIcon(BookmarkIcon);
  };

  const handleBookmarkClick = () => {
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    isSaved
      ? setBookmarkIcon(BookmarkActiveIcon)
      : setBookmarkIcon(BookmarkIcon);
  }, [isSaved]);

  const { title, description, date, source, keyword, imageSrc } = card;

  const renderTagsList = () => {
    return (
      <>
        {atHomePage || (
          <div className="card__tag card__tag_type_keyword flex flex-center absolute">
            {keyword}
          </div>
        )}
        {tooltipShown && (
          <div className="card__tag card__tag_type_tooltip flex flex-center absolute">
            Sign in to save articles
          </div>
        )}
        <button
          className="card__tag card__tag_type_action flex flex-center absolute"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleBookmarkClick}
          type="button"
        >
          {atHomePage ? (
            <img src={bookmarkIcon} alt="Bookmark" className="card__tag-icon" />
          ) : (
            <img src={TrashIcon} alt="Delete" className="card__tag-icon" />
          )}
        </button>
      </>
    );
  };

  return (
    <div className="card relative flex flex-col">
      {renderTagsList()}
      <img className="card__image" alt={title} src={imageSrc} />
      <div className="card__data flex flex-col justify-between h-full">
        <div className="card__text flex flex-col">
          <Paragraph color="gray">{date}</Paragraph>
          <h2 className="title title_size_s">{title}</h2>
          <Paragraph fontSize="s">{description}</Paragraph>
        </div>
        <div>
          <Paragraph color="gray" transform="uppercase">
            {source}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
