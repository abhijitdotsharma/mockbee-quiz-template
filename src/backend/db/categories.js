import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Champions League",
    description: "Giants of Europe clash every year for the throne",
    picture: "https://res.cloudinary.com/wickedsharma/image/upload/v1662553354/popcorn/categories/champions-league_mdd1ix.png",
  },
  {
    _id: uuid(),
    categoryName: "La Liga",
    description: "Spanish league where we see technical football",
    picture: "https://res.cloudinary.com/wickedsharma/image/upload/v1662553354/popcorn/categories/la-liga_ua1zkc.png",
  },
  {
    _id: uuid(),
    categoryName: "Premier League",
    description: "English league, fast-paced and modern",
    picture: "https://res.cloudinary.com/wickedsharma/image/upload/v1662553354/popcorn/categories/prem-league_repiv7.png"
  },
];
