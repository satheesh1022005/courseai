import React from 'react';

const AnswerComponent = ({ answerOptions }) => {
  return (
    <div className="answer-options-container">
      <p>Please select your answer:</p>
      <ul className="options">
        {answerOptions.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerComponent;
