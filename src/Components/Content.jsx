import React from "react";

import LastArticle from "./LastArticle";
import PopularArticles from "./PopularArticles";
import WeeklyArticles from "./WeeklyArticles";

const Content = ({ data }) => {
  const [lastArticle, weeklyArticles, popularArticles] = data;
  return (
    <div className="container h-auto">
      <div className="flex">
        <LastArticle data={lastArticle} />
        <PopularArticles data={popularArticles} />
      </div>
      <WeeklyArticles data={weeklyArticles} />
    </div>
  );
};

export default Content;
