import "./results-page.css"
import { useQuiz } from "../../context/quiz-context"
import { Footer, NavigationTop } from "../../components";

export default function ResultsPage() {

    const { mcqs, correctCount } = useQuiz();
    const { questions } = mcqs;

    function optionClicked(questionItem, optionIdx) {

        let returnStr = ''

        //on clicked option - check if green or red
        if (questionItem.options[optionIdx] === questionItem.clicked) {

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


    return (
        <div className="results-page-container">

            <NavigationTop />

            <main className="results">
                <h1 className="results-heading">I am Results Page</h1>
                <h3 className="results-score btn btn-secondary">Correct Count : {correctCount}</h3>

                <div className="results-answers">
                    {questions.map((item, idx) =>
                        <div key={idx}>
                            <h3>Question: {item.question}</h3>
                            {item.options.map((option, optionIdx) =>
                                <p key={optionIdx}
                                    className={`
                        ${optionClicked(item, optionIdx)}
                        `}>
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