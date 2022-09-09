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
        question: "Who scored the fastest Champions League goal of all-time?",
        options: ["Lionel Messi", "Roy Maakay", "Luis Suarez", "Erling Haland"],
        answer: "Roy Maakay",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Lionel Messi's five-goal haul against which team?",
        options: ["Bayer Leverkusen", "Tottenham", "RB Leipzig", "Dortmund"],
        answer: "Bayer Leverkusen",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec50",
        question: "Which UK club has won the Champions League the most times?",
        options: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"],
        answer: "Liverpool",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ef60",
        question: "How many team can one country allow to compete?",
        options: ["Two", "Three", "Four", "Five"],
        answer: "Five",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ef61",
        question: "Name of the song played before each match?",
        options: ["Three Lions", "Champions League", "World in Motion", "Eyes on the Ball"],
        answer: "Champions League",
      },
    ],
    catergoryName: "Champions League",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95f18",
    title: "Ankara Messi",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Who has most La Liga titles",
        options: ["Real Madrid", "Barcelona", "Athletico Madrid", "Sevilla"],
        answer: "Real Madrid",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "Who has the most La Liga appearances?",
        options: ["Messi", "Xavi of Barca", "Xavi of Madrid", "Andoni Zubizarreta"],
        answer: "Andoni Zubizarreta",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Main sponsor of La Liga?",
        options: ["Santander", "Rakuten", "Emirates", "Adani"],
        answer: "Santander",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec44",
        question: "Most expensive signing in La Liga history?",
        options: ["Philippe Coutinho", "Cristiano Ronaldo", "Dembele", "Griezman"],
        answer: "Philippe Coutinho",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec34",
        question: "Who is La Liga's all-time top scorer?",
        options: ["Philippe Coutinho", "Cristiano Ronaldo", "Lionel Messi", "Suarez"],
        answer: "Lionel Messi",
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
        question: "When was Premier League founded ?",
        options: ["1990", "1991", "1992", "1993"],
        answer: "1992",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "What team won the 1st Premier League title ? ",
        options: ["Chelsea", "Man United", "Tottenham", "Liverpool"],
        answer: "Man United",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb7",
        question: "Aguero scored his famous title winning goal against __ in 2012 ?",
        options: ["Chelsea", "Man United", "QPR", "Liverpool"],
        answer: "QPR",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb8",
        question: "Which team won their first ever Premier League title in 2016?",
        options: ["Arsenal", "Man United", "Leicester", "Leeds"],
        answer: "Leicester",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb9",
        question: "Manager referred to himself as ‘a special one’ in 2004?",
        options: ["Mourinho", "Alex Ferguson", "Pep Guardiola", "Wenger"],
        answer: "Mourinho",
      },      
    ],
    catergoryName: "Premier League",
  }
];
