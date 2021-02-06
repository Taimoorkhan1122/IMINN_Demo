import React from "react";

import LastArticle from "./LastArticle";
import PopularArticles from "./LatestArticles";
import WeeklyArticles from "./WeeklyArticles";

const Content = () => {
  return (
    <div className="container h-auto">
      <div className="flex">
        <LastArticle />
        <PopularArticles />
      </div>
      <WeeklyArticles />
    </div>
  );
};

export default Content;
