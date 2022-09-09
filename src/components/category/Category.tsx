import axios from "axios";
import "./category.css";
import {useQuiz} from "../../context/quiz-context";
import {useNavigate} from "react-router-dom";
import {CategoryType} from "../../types"

type Props = {
    category: CategoryType,
}




export default function Category({category}: Props): JSX.Element {


    const navigate = useNavigate();
    
    const {setMcqs} = useQuiz();

    const {description, picture} = category;

    async function playNowHandler(categoryId: CategoryType["_id"]){
        //calls the quizzes of a particular category
        const response = await axios.get(`/api/categories/quizzes/${categoryId}`) 
        console.log("questions: ", response?.data?.quizzes[0]?.mcqs)
        setMcqs({step: 0, questions: response?.data?.quizzes[0]?.mcqs})  // response.data.quizzes[0].mcqs -- questions: []
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
                <img src={picture} alt="image" />
                <div className="text-overlay">
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