import axios from "axios";
import { useEffect, useState } from "react";
import { NavigationTop, Category } from "../../components";
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