import React from "react";
import "./Bookmarked.css";
import BookmarkInside from "../BookmarkedInside/BookmarkInside";

const Bookmarked = (props) => {
  return (
    <div className="bookmark-aside">
        <div className="spent-time-container">
            <h4>Spent time on read : {props.spentTime} min</h4>
        </div>
      <div className="bookmark-container">
        <h4>Bookmarked Blogs : {props.length}</h4>
        {
            props.bookmarked.map((bookmarkSingle)=><BookmarkInside key={bookmarkSingle.id} bookmarkSingle={bookmarkSingle}></BookmarkInside>)
        }
      </div>
    </div>
  );
};

export default Bookmarked;
