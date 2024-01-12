import './HomePG.css';
import logo_icon from '../Assets/Logo.png';
import separator from '../Assets/Underline.png';
import past_results from '../Assets/PastResults.png';
import review_test_results from '../Assets/ReviewTestResults.png';

const HomeLC = () => {
    return (
        <div className="pg-column">
            <div className="pg-welcome-container">
                <img src={logo_icon} alt="Logo"/>
                <div className="pg-welcome-text">Welcome to the Pathologist Portal!</div>
            </div>

            <div className="pg-choice">Please select what you would like to do:</div>

            <div className="pg-row">
                <div className="pg-view-p-t-r-container">
                    <img src={past_results} alt="past_results"></img>
                    <div className="pg-view-p-t-r-text">View Past Test Results</div>
                </div>

                <div className="pg-separator">
                    <img src={separator} alt="separator"></img>
                </div>

                <div className="pg-review-t-r-container">
                    <img src={review_test_results} alt="review_test_results"></img>
                    <div className="pg-review-t-r-text">Review Test Results</div>
                    <div className="pg-review-t-r-count">(You have - unreviewed test results)</div>
                </div>
            </div>
        </div>
    );
}

export default HomeLC;
