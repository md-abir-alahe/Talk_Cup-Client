import React from "react";
import './BookmarkInside.css'

const BookmarkInside = (props) => {
  return (
    <div>
      <div className="bookmarked-title-container">
        <p className="bookmarked-title">{props.bookmarkSingle.title}</p>
      </div>
    </div>
  );
};

export default BookmarkInside;
