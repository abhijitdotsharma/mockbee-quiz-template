import { Link } from "react-router-dom";
import Hero from "../../assets/hero-removebg.png";
import { NavigationTop, Footer } from '../../components';
import "./home-page.css";


export default function HomePage() {

    return (
        <div className="homepage">
            <NavigationTop />
            <div className="landing-text">
                <p className="txt-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>

                <p className="txt-md">
                    Test your football knowledge
                </p>
                <Link 
                to="/category-page"
                className="btn-landing-text"
                onClick={() => console.log("test")}
                >Lets Gooo</Link>
            </div>

            {/* <main className="flex"> */}
                {/* <footer className="landing-footer">
                    <p>Github || Instagram || Portfolio</p>
                </footer> */}
                <div className='hero-wrapper'>
                    <img
                        className='hero-img'
                        src={Hero}
                        alt="hero"
                    />
                </div>
            {/* </main> */}
        </div>
    )
}