import React from "react";
import "./article.css";
const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
