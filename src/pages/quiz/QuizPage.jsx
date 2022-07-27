import { useEffect } from "react";
import { useQuiz } from "../../context/quiz-context"

/**
 * correctCount inside QuizPage re-renders on each question, so at max it can
 * be 1. This was the bug, can be solved if using a state variable?
 * But, if that updates, it will make the QuizPage rerender
 * 
 */
let correctCount = 0;


export default function QuizPage() {

    

    function checkAnswer(correctAns, clickedAns) {
        console.log(`correctAns-${correctAns} || clickedAns-${clickedAns}`);
        if(correctAns === clickedAns){
            console.log("correctCount before-", correctCount)
            correctCount++
            console.log("correctCount after-", correctCount)
        }
    }

    const { mcqs, setMcqs } = useQuiz();
    // mcqs = {
    //     step: 0,
    //     questions: [
    //     { id: 1, title: 'What is your name?'..... },
    //     { id: 2, title: 'What do you do?' },
    //     { id: 3, title: 'Where you from?' }
    //     ]
    // }

    useEffect(() => {
        return () => {
            console.log("correctCount is - ", correctCount)
        }

    }, [])

    function previousQuestion() {
        if (mcqs.step === 0) return //should not go further prev if first question
        setMcqs(prev => ({ ...prev, step: prev.step - 1 }))
    }

    function nextQuestion() {
        if (mcqs.step === (mcqs.questions.length - 1)) return //shouldn't go forward if last question
        setMcqs(prev => ({ ...prev, step: prev.step + 1 }))
    }

    // console.log("mcqs are - ", mcqs)
    // console.log(mcqs.step)
    // console.log(mcqs.questions[mcqs.step].question)
    return (
        <div>
            <h1>I am quiz page</h1>
            <h3>Question : {mcqs.questions[mcqs.step].question}</h3>

            <p
                onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[0])}
            >A. {mcqs.questions[mcqs.step].options[0]}</p>
            <p
                onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[1])}
            >B. {mcqs.questions[mcqs.step].options[1]}</p>
            <p
                onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[2])}
            >C. {mcqs.questions[mcqs.step].options[2]}</p>
            <p
                onClick={() => checkAnswer(mcqs.questions[mcqs.step].answer, mcqs.questions[mcqs.step].options[3])}
            >D. {mcqs.questions[mcqs.step].options[3]}</p>

            <button onClick={() => previousQuestion()}>previous</button>
            <button onClick={() => nextQuestion()}>next</button>

        </div>
    )
}