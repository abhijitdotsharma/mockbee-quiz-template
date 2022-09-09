import { useState, useEffect } from "react";
import { useQuiz } from "../../context/quiz-context";
import { useNavigate, Navigate, Link } from "react-router-dom";
import RulesPage from "../rules-page/RulesPage";
import { Footer, NavigationTop } from "../../components";
import "./quiz-page.css"
import { MCQS, Question } from "../../types";


export default function QuizPage() {

    const navigate = useNavigate();
    const { mcqs, setMcqs } = useQuiz();

    const { setCorrectCount } = useQuiz();

    //show <RulesPage/> when user comes from Category -> QuizPage
    const [rulesShown, setRulesShown] = useState(false)



    function checkAnswer(correctAns: string, clickedAns: string, clickedOptionQuestionId: string): void {

        if (correctAns === clickedAns) {
            setCorrectCount( (prev: number) => prev+1)
        }

        //save the 'clicked' option by modifying mcqs data structure
        setMcqs((prev : MCQS) => {
            return {
                ...prev,
                questions: [...prev.questions.map(question => {
                    //set clicked flag for one question at a time in questions array
                    if (question._id === clickedOptionQuestionId) {
                        return { ...question, clicked: clickedAns }
                    }
                    return question
                })]
            }
        })
    }



    function previousQuestion() {
        if (mcqs.step === 0) return //should not go further prev if first question
        setMcqs(prev => ({ ...prev, step: prev.step - 1 }))
    }

    function nextQuestion() {
        if (mcqs.step === (mcqs.questions.length - 1)) {
            //shouldn't go forward if last question, it should go to result page
            navigate("/results-page")
        }
        setMcqs(prev => ({ ...prev, step: prev.step + 1 }))
    }

    return (
        <>{rulesShown ? <div className="quiz-page-container">
            <NavigationTop />
            <main className="quiz-wrapper">
                <h3 className="quiz-question txt-md">Question : {mcqs.questions[mcqs.step].question}</h3>

                <div className="quiz-options">
                    <p
                        onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[0], mcqs.questions[mcqs.step]._id)}
                    >A. {mcqs.questions[mcqs.step].options[0]}</p>
                    <p
                        onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[1], mcqs.questions[mcqs.step]._id)}
                    >B. {mcqs.questions[mcqs.step].options[1]}</p>
                    <p
                        onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[2], mcqs.questions[mcqs.step]._id)}
                    >C. {mcqs.questions[mcqs.step].options[2]}</p>
                    <p
                        onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[3], mcqs.questions[mcqs.step]._id)}
                    >D. {mcqs.questions[mcqs.step].options[3]}</p>
                </div>

                <div className="quiz-btns">
                    <button className="btn btn-secondary txt-sm" onClick={() => previousQuestion()}>previous</button>
                    <button className="btn btn-primary txt-sm" onClick={() => nextQuestion()}>next</button>
                </div>
            </main>
            
            <Footer />

        </div> :
            <RulesPage setRulesShown={setRulesShown} />
        }
        </>
    )
}

