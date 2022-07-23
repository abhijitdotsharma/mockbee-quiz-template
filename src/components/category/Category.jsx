import axios from "axios";
import {useQuiz} from "../../context/quiz-context";
import {useNavigate} from "react-router-dom";

export default function Category({category}) {

    const navigate = useNavigate();
    
    const {mcqs, setMcqs} = useQuiz();

    const {categoryName, description} = category;

    async function playNowHandler(categoryId){
        //calls the quizzes of a particular category
        const response = await axios.get(`/api/categories/quizzes/${categoryId}`)
        console.log(response.data.quizzes[0].mcqs)

        //setMcqs to quizContext
        setMcqs(prev => ({...prev, questions: response?.data?.quizzes[0]?.mcqs}))
        navigate("/quiz-page")
    }

    // console.log("category comp - ", category)

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