import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Champions League",
    description: "The champions",
  },
  {
    _id: uuid(),
    categoryName: "La Liga",
    description: "Ankara messi",
  },
  {
    _id: uuid(),
    categoryName: "Premier League",
    description: "english football"
  },
];
