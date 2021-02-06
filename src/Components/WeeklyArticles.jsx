import React from "react";

const WeeklyArticles = ({ data: { weeklyArticles } }) => {
  return (
    <div className="wk-art my-10">
      <h3>Weekly Articles</h3>
      <div className="container flex justify-between px-0">
        {weeklyArticles.map((article, index) => (
          <div key={index + 2} className="wk-art-container w-auto flex ">
            <div className="img-container ">
              <img src="./assets/wk-article-1.png" alt="footbaal" />
            </div>
            <div className="content w-9/12 pl-5 ">
              <h3>{article.heading}</h3>
              <p className="italic">{article.date}</p>
              <p>{article.content}</p>
              <div className="icon ">
                <img src="./assets/arrow-right-circle.svg" alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyArticles;
