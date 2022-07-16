import {Link} from "react-router-dom";
import Hero from "../../assets/hero-removebg.png";
import {NavigationTop, Footer} from '../../components';
import "./home-page.css";

const HeroImage = () => {
    return(
        <div className='hero-wrapper'>
            <img 
            className='hero-img'
            src={Hero} 
            alt="hero" 
            />
        </div>
    )
}

export const LandingText = () => {


    return(
        <div className="landing-text">
            <p className="txt-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>

            <p className="txt-md">
                Test your football knowledge
            </p>
            <button
            className="btn-landing-text"
            >Lets go</button>
        </div>
    )
}

const LandingFooter = () => {
    return(
        <footer className="landing-footer">
            <p>Github || Instagram || Portfolio</p>
        </footer>
    )
}

export default function HomePage() {

    return(
        <div className="homepage">
            <NavigationTop />
            <LandingText />
            <main className="flex">
                <LandingFooter/>
                <HeroImage />
            </main>
        </div>
    )
}