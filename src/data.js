// dummy data

export const fetchData = () => {
  const data = [
    {
      lastArticle: {
        heading: "The best game in this year.",
        content:
          "Get ready for creating awesom football game, climb the highest rank in your city. Reach the top level by playing the games and be a superstart",
        image: "./assets/image.png",
      },
    },
    {
      weeklyArticles: [
        {
          heading: "The best game in this year",
          content:
            "Get ready for creating awesom football game, climb the highest rank in your city. Reach the top level by playing the games and be a superstart",
          date: "13 January 2020",
          image: "./assets/image.png",
        },
        {
          heading: "The best game of last year",
          content:
            "Get ready for creating awesom football game, climb the highest rank in your city. Reach the top level by playing the games and be a superstart",
          date: "13 Febraury 2019",
          image: "./assets/image.png",
        },
      ],
    },
    {
      popularArticles: [
        {
          heading: "The best game in this year",
          content:
            "Get ready for create awesome football game, climb the highest rank ",
          date: "13 January 2020",
        },
        {
          heading: "The best game in this year",
          content:
            "Get ready for create awesome football game, climb the highest rank ",
          date: "13 January 2020",
        },
        {
          heading: "The best game in this year",
          content:
            "Get ready for create awesome football game, climb the highest rank ",
          date: "13 January 2020",
        },
        {
          heading: "The best game in this year",
          content:
            "Get ready for create awesome football game, climb the highest rank ",
          date: "13 January 2020",
        },
      ],
    },
  ];
  return data;
};
