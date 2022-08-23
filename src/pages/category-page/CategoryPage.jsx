import axios from "axios";
import { useEffect, useState } from "react";
import { NavigationTop, Category, Footer } from "../../components";
import "./category-page.css";

export default function CategoryPage() {

    const [categories, setCategories] = useState([
        //{categoryName: description: id: _id: }
    ])

    useEffect(() => {
        // getCategoriesOnLoad()
        (async function getCategoriesOnLoad() {
            const response = await axios.get(`/api/categories`)
            setCategories(prev => [...prev, ...response.data.categories])
        })()
    }, [])

    return (
        <div className="category-page-wrapper">
            <NavigationTop />
            {categories.length != 0 && categories.map(category => <Category key={category.id} category={category} />)}
            <Footer />
        </div>
    )
}