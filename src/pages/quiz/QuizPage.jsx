import { useEffect } from "react";
import { useQuiz } from "../../context/quiz-context";
import {useNavigate, Navigate} from "react-router-dom";



export default function QuizPage() {

    const navigate = useNavigate();
    const { mcqs, setMcqs} = useQuiz();
    const {correctCount, setCorrectCount} = useQuiz();

    console.log("mcqs Obj in QuizPage - ", mcqs)

    function checkAnswer(correctAns, clickedAns, clickedOptionQuestionId) {

        if(correctAns === clickedAns){
            console.log("correctCount before: ", correctCount)
            setCorrectCount(prev => prev+1)
            console.log("correctCount after: ", correctCount)
        //Bug - clicking on correct option keeps increasing the count. Should increase only once
        }

        //save the 'clicked' option by modifying mcqs data structure
        setMcqs(prev => {
            return {
                ...prev,
                questions: [...prev.questions.map(question => {
                //set clicked flag for one question at a time in questions array
                    if (question._id === clickedOptionQuestionId){
                        return {...question, clicked: clickedAns}
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
        if (mcqs.step === (mcqs.questions.length - 1)){
            //shouldn't go forward if last question, it should go to result page
            navigate("/results-page")
        } 
        setMcqs(prev => ({ ...prev, step: prev.step + 1 }))
    }

    console.log("correctCount before return: ", correctCount)
    return (
        <div>
            <h1>I am quiz page</h1>
            <h3>Question : {mcqs.questions[mcqs.step].question}</h3>

            <p
                onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[0], mcqs.questions[mcqs.step]._id)}
            >A. {mcqs.questions[mcqs.step].options[0]}</p>
            <p
                onClick={() => checkAnswer( mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[1], mcqs.questions[mcqs.step]._id)}
            >B. {mcqs.questions[mcqs.step].options[1]}</p>
            <p
                onClick={() => checkAnswer( mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[2], mcqs.questions[mcqs.step]._id)}
            >C. {mcqs.questions[mcqs.step].options[2]}</p>
            <p
                onClick={() => checkAnswer( mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[3], mcqs.questions[mcqs.step]._id)}
            >D. {mcqs.questions[mcqs.step].options[3]}</p>

            <button onClick={() => previousQuestion()}>previous</button>
            <button onClick={() => nextQuestion()}>next</button>

        </div>
    )
}