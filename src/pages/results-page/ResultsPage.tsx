import "./results-page.css"
import { useQuiz } from "../../context/quiz-context"
import { Footer, NavigationTop } from "../../components";

import { Question } from "../../types";


  
type ResultPageQuestionObject = Question & {
    clicked?: string;
};

export default function ResultsPage() {

    const { mcqs, correctCount } = useQuiz();
    const { questions } = mcqs;

    function optionClicked(questionItem: ResultPageQuestionObject, optionIdx: number): string {

        let returnStr = ''

        //on clicked option - check if green or red
        if (questionItem.options[optionIdx] === questionItem?.clicked) {

            //clickedOption is the correct option
            if (questionItem.options[optionIdx] === questionItem.answer) {
                return returnStr = "correct-clicked"
            } else {
                //clicked option is not the correct option
                return returnStr = "wrong-clicked"
            }
        }

        //if current option is the right option
        if (questionItem.options[optionIdx] === questionItem.answer) {
            return returnStr = "correct-option"
        }

        return returnStr = "normal"
    }

    console.log("questions - mapped", questions)
    return (
        <div className="results-page-container">

            <NavigationTop />

            <main className="results">
                <h1 className="results-heading">Result</h1>
                <h3 className="results-score btn btn-secondary">Score : {correctCount * 10} points</h3>

                <div className="results-answers">
                    {questions.map((item, idx) =>
                        <div key={idx} style={{padding:"1rem", marginBottom:"0.4rem"}}>
                            <h3>Question: {item.question}</h3>
                            {item.options.map((option, optionIdx) =>
                                <p key={optionIdx}
                                    className={`${optionClicked(item, optionIdx)}`}>
                                    {optionIdx + 1}. {option}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    )
}