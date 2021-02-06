import React from "react";

const LatestArticles = () => {
  return (
    <div className="w-1/3">
      <h3>Most popular articles</h3>
      <div className="article-card border-b-2 flex justify-between items-center py-5 w-full">
        <div className="card-content">
          <h2>The best game in this year.</h2>
          <p>
            Get ready for create awesome football game, climb the highest rank
          </p>
        </div>
        <div className="icon mr-5">
          <img src="./assets/arrow-right-circle.svg" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
