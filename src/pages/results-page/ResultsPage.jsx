import "./results-page.css"
import { useQuiz } from "../../context/quiz-context"
import { NavigationTop } from "../../components";

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
                <h1 className="results-heading">Results</h1>
                <h3 className="results-score btn btn-secondary">Score : {correctCount * 10}</h3>

                <div >
                    {questions.map((item, idx) =>
                        <div className="results-answers" key={idx}>
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

            <footer className="landing-footer">
                <h3 className="footer-txt">
                    made by <a className="footer-link" href="https://abhijit.super.site">Abhijit</a>
                </h3>
                <p className="footer-socials">
                    <a className="footer-link" href="https://github.com/abhijitdotsharma/popcorn">GitHub</a>
                    <span className="footer-link-gap">||</span>
                    <a className="footer-link" href="https://linkedin.com/in/abhijitdotsharma">LinkedIn</a>
                    <span className="footer-link-gap">||</span>
                    <a className="footer-link" href="https://abhijit.super.site">Hire me ?</a>
                </p>
            </footer>
        </div>
    )
}