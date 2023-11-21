import React from 'react';

const QuestionComponent = ({ questionConfig }) => {
  const { text, options } = questionConfig;

  return (
    <div className="question">
      <h3>{text}</h3>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
