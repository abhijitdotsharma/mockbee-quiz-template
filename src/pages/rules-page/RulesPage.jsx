import './rules-page.css';
import { NavigationTop } from '../../components';
import { Link, useLocation } from 'react-router-dom';
export default function RulesPage({setRulesShown}){

    return(
        <div>
            <NavigationTop />
            <div className='rules-wrapper'>
                <h2>Quiz Rules</h2>
                <section className='rules-section'>
                    <p>There are 5 questions in total</p>
                    <p>Each question gets you 10 more points</p>
                    <button
                    className='btn btn-primary'
                    onClick={() => setRulesShown(prev => prev = true)}>
                        <Link to="/quiz-page">Start Quiz</Link>
                    </button>
                    
                </section>
                <button className='btn btn-secondary txt-md'><Link to="/category-page">Go Back</Link></button>
            </div>
        </div>
    )
}