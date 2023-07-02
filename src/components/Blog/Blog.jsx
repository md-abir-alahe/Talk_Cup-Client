import React from "react";
import "./Blog.css";
import bookmarkedLogo from '../../assets/ribbon.png'

const Blog = (props) => {
  const {id, image, picture, name, title, published, read } = props.blog;
  const handleAddToBookmark = props.handleAddToBookmark;
  const handleAddTime = props.handleAddTime;
  return (
    <div className="blog-container">
      <img className="blog-container-cover-image" src={image} alt="" />
      <div className="blog-details">
        <div className="blog-header-row">
          <div className="blog-header-row-img-name-pub">
            <img src={picture} alt="" />
            <div className="blog-header-row-name-pub">
              <h6>{name}</h6>
              <p>{published}</p>
            </div>
          </div>
          <div className="blog-header-row-read-bookmarked">
            <p>{read} min read</p>
            <button onClick={()=>handleAddToBookmark(props.blog)} className="bookmarked-btn"><img src={bookmarkedLogo} alt="" /></button>
          </div>
        </div>
        <h4 className="blog-title">{title}</h4>
      </div>
      <button onClick={()=>handleAddTime(read)} className="mark-as-read-btn">Mark as read</button>
    </div>
  );
};
import "./Blog.css";


export default Blog;
