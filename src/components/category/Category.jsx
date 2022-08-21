import axios from "axios";
import "./category.css";
import {useQuiz} from "../../context/quiz-context";
import {useNavigate} from "react-router-dom";

export default function Category({category}) {

    const navigate = useNavigate();
    
    const {mcqs, setMcqs} = useQuiz();

    const {categoryName, description} = category;

    async function playNowHandler(categoryId){
        //calls the quizzes of a particular category
        const response = await axios.get(`/api/categories/quizzes/${categoryId}`)
        // response.data.quizzes[0].mcqs -- questions 

        //setMcqs to quizContext
        setMcqs(prev => ({step: 0, questions: response?.data?.quizzes[0]?.mcqs}))
        navigate("/quiz-page")

        // setMcqs(prev => ({...prev, step:0 , questions: response?.data?.quizzes[0]?.mcqs}))
        // A bug was introduced due to ...prev 
        // when user clicks on 'playNowHandler()' it sets the mcqs from the API response
        // But when the user goes back to <CategoryPage/>, he wants a new category and the API returns that
        // and spreading the new response along with the old response changes our mcq data structure which we don't want
    }

    return (
        <div className="card-horizontal overlay"
        style={{margin: "1rem auto"}}
        >
            <div className="horizontal-image">
                <img src="https://picsum.photos/400" alt="image" />
                <div className="text-overlay">
                    <h3>{categoryName}</h3>
                    <button
                    onClick={() => playNowHandler(category._id)}
                    >Play now</button>
                </div>
            </div>

            <div className="card-content">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}