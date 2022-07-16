import './rules.css'
import NavigationTop from '../navigation-top/NavigationTop'
export default function Rules(){

    return(
        <div>
            {/* Navigation Top will be removed later */}
            <NavigationTop />
            <div className='rules-wrapper'>
                <h2>Quiz Rules</h2>
                <section className='rules-section'>
                    <p>There are 5 questions in total</p>
                    <p>Each question gets you 10 more points</p>
                    <button>Start Quiz</button>
                </section>
                <h4>Go Back</h4>
            </div>
        </div>
    )
}