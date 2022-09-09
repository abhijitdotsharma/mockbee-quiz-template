import './rules-page.css';
import { NavigationTop } from '../../components';
import { Link, useLocation } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

type Props = {
    setRulesShown?: Dispatch<SetStateAction<boolean>>
}


export default function RulesPage({setRulesShown}: Props): JSX.Element{

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
                    onClick={() => setRulesShown?.((prev: boolean) => prev = true)}>
                        <Link to="/quiz-page">Start Quiz</Link>
                    </button>
                    
                </section>
                <button className='btn btn-secondary txt-md'><Link to="/category-page">Go Back</Link></button>
            </div>
        </div>
    )
}