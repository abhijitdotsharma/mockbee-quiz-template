import axios from "axios";

export default function Category({category}) {

    const {categoryName, description, id, _id} = category;

    async function playNowHandler(categoryId){
        console.log("cat id - ", categoryId)
        //calls the quizzes
        const response = await axios.get(`/api/quizzes/${categoryId}`)
        console.log("Response - ", response)
    }

    console.log("category comp - ", category)
    return (
        <div className="card-horizontal overlay"
        style={{margin: "1rem auto"}}
        >
            <div className="horizontal-image">
                <img src="https://picsum.photos/400" alt="image" />
                <div className="text-overlay">
                    <h3>{categoryName}</h3>
                    <button
                    onClick={() => playNowHandler(_id)}
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