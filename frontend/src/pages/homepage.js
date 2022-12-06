import React from 'react'

import "../styles/homepage.css"

function Homepage() {
  return (
      <div>
        <div className="container">
        <div className="description-container">
            <h1 className="big-slogan">THINK. ANSWER. FAST.</h1>
            <div className="yellow-dash"></div>
            <h3 className="what-to-do">WHAT TO DO</h3>
            <p className="short-description-paragraph">have fun by taking different quizzes with different categories like
                General Knowledge, Film & TV, Science, History....</p>
            <button className="try-it-btn">TRY IT</button>
            <div className="question-box">
                <p className="question-category">General Knowledge</p>
                <h3 className="question-text">What geometric shape is generally used for stop signs?</h3>
                <div className="question-choice">
                    <div className="question-choice-checkbox"></div>
                    <span className="question-chioce-text">A. Hexagon</span>
                </div>
                <div className="question-choice">
                    <div className="question-choice-checkbox"></div>
                    <span className="question-chioce-text">B. Circle</span>
                </div>
                <div className="question-choice">
                    <div className="question-choice-checkbox"></div>
                    <span className="question-chioce-text">C. Circle</span>
                </div>
                <div className="question-choice selected-question-choice">
                    <div className="question-choice-checkbox"></div>
                    <span className="question-chioce-text">D. Octagon</span>
                </div>
            </div>
        </div>
    </div>
      </div>
  );
}


export default Homepage