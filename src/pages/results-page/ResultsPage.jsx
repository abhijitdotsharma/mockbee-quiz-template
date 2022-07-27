import "./results-page.css"
import { useQuiz } from "../../context/quiz-context"

export default function ResultsPage() {

    const {mcqs, correctCount} = useQuiz();
    const {questions} = mcqs;

    function optionClicked(questionItem, optionIdx){

        let returnStr = ''

        //on clicked option - check if green or red
        if(questionItem.options[optionIdx] === questionItem.clicked){

            //clickedOption is the correct option
            if(questionItem.options[optionIdx] === questionItem.answer){
                return returnStr = "correct-clicked"
            }else{
                //clicked option is not the correct option
                return returnStr = "wrong-clicked"
            }
        }

        //if current option is the right option
        if(questionItem.options[optionIdx] === questionItem.answer){
            return returnStr = "correct-option"
        }

        return returnStr = "normal"
    }

    
    return (
        <div>
            <h1>I am Results Page</h1>
            <h2>Correct Count : {correctCount}</h2>
            {questions.map((item, idx) => 
                <div key={idx}>
                    <h3>Question: {item.question}</h3>
                    {item.options.map((option, optionIdx )=> 
                        <p key={optionIdx}
                        className={`
                        ${optionClicked(item, optionIdx)}
                        `}

                        >{idx+1}. {option}</p>
                    )}
                </div>
            )}
        </div>
    )
}