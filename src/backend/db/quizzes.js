import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "The Champions",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Champions League Question 1",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Champions League Question 2",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Champions League Question 3",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    catergoryName: "Champions League",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95e18",
    title: "Ankara Messi",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "LA LIGA Question 1",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "LA LIGA Question 2",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "LA LIGA Question 3",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    catergoryName: "La Liga",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95e18",
    title: "english football",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "PREMIER LEAGUE Question 1",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "PREMIER LEAGUE Question 2",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },      
    ],
    catergoryName: "Premier League",
  }
];
