import axios from "axios";
import { useEffect, useState } from "react";
import { NavigationTop, Category } from "../../components";

export default function CategoryPage(){

    const [categories, setCategories] = useState([
        //{categoryName: description: id: _id: }
    ])

    async function getCategoriesOnLoad(){
        const response = await axios.get(`/api/categories`)
        setCategories([...response.data.categories])
    }

    useEffect(() => {
        getCategoriesOnLoad()
    }, [])

    return(
        <div style={{marginTop: "5rem"}}>
            <NavigationTop />
            {categories.length != 0 && categories.map(category => <Category key={category.id} category={category}/>)}
        </div>
    )
}