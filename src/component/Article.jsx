import React from "react";
import "./Article.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Article = ({ news }) => {
  return (
    <div className="article" key={news.source.id} data-aos="fade-up">
      <div className="card">
        <h2 className="title">{news.title}</h2>
        <img src={news.urlToImage} alt="images" className="article-image" />
        <div className="author-info">
          <h3 className="author">{news.author}</h3>
          <p className="published-date">{news.publishedAt}</p>
        </div>
        <p className="content">{news.content}</p>
        <a href={news.url} target="blank" className="article-link">
          click here to see full article
        </a>
      </div>
    </div>
  );
};

export default Article;
