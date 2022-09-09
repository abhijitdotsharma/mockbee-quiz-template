import { Link } from "react-router-dom";
import Hero from "../../assets/quiz-hero.png";
import { NavigationTop, Footer } from '../../components';
import "./home-page.css";


export default function HomePage(): JSX.Element {

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
                        ready to test your football knowledge?
                        <Link className='btn btn-primary txt-sm' to="/category-page">LFG 🚀</Link>
                    </p>
                    
                </main>
            </main>

            <Footer />

        </div>
    )
}