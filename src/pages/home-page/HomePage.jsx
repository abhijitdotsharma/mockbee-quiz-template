import { Link } from "react-router-dom";
import Hero from "../../assets/quiz-hero.png";
import { NavigationTop, Footer } from '../../components';
import "./home-page.css";


export default function HomePage() {

    return (
        <div className="homepage">
            <NavigationTop />

            <main className="landing-container">
                <div className="img-container">
                    <img
                        className="hero-image"
                        src={Hero}
                        alt="hero-image"
                    />
                </div>
                <main className="txt-container">
                    <p>
                        ready to know what you don't know?
                        <Link className='btn btn-primary txt-sm' to="/category-page">LFG 🚀</Link>
                    </p>
                    
                </main>
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