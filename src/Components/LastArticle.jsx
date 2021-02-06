import React from "react";

const LastArticle = ({ data }) => {
  const { lastArticle } = data;
  return (
    <div className="w-2/3 ">
      <h3>Last Article</h3>
      <div className="img-container">
        <img src={lastArticle.image} alt="football" />
      </div>
      <div className="last-article-content py-5">
        <h1>{lastArticle.heading}</h1>
        <p>{lastArticle.content}</p>
      </div>
    </div>
  );
};

export default LastArticle;
