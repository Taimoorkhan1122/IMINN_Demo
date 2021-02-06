import React from "react";

const PopularArticles = ({ data: { popularArticles } }) => {
  return (
    <div className="w-1/3">
      <h3>Most popular articles</h3>
      {popularArticles.map((article, index) => (
        <div
          key={index + 1}
          className="article-card border-b-2 flex justify-between items-center py-5 w-full">
          <div className="card-content">
            <h2>{article.heading}</h2>
            <p>{article.content}</p>
          </div>
          <div className="icon mr-5">
            <img src="./assets/arrow-right-circle.svg" alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularArticles;
