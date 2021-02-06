import React from "react";

const WeeklyArticles = () => {
  return (
    <div className="wk-art">
      <h3>Weekly Articles</h3>
      <div className="wk-art-container w-auto flex ">
        <div className="img-container ">
          <img src="./assets/wk-article-1.png" alt="footbaal" />
        </div>
        <div className="content w-1/3 px-5 ">
          <h3>The best games in this year</h3>
          <p className="italic">11 January 2020</p>
          <p>
            Get ready for create awesome football game, climb the highest rank
            in your city.
          </p>
          <div className="icon ">
            <img src="./assets/arrow-right-circle.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyArticles;
