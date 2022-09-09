import axios from "axios";
import { useEffect, useState } from "react";
import { NavigationTop, Category, Footer } from "../../components";
import "./category-page.css";

import { CategoryType } from "../../types";

export default function CategoryPage() {


    const [categories, setCategories] = useState<CategoryType []>([])

    useEffect(() => {
        // getCategoriesOnLoad()
        (async function getCategoriesOnLoad() {
            const response = await axios.get(`/api/categories`)
            setCategories((prev: CategoryType[]): CategoryType[] => [...prev, ...response.data.categories])
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