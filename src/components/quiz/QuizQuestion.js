import React from "react";

const QuizQuestion = ({ selectedCategory, currentIndex, nextQuestion }) => {
  const { questions } = selectedCategory;

  const setProgess = () => {
    const total = selectedCategory.questions.length;
    const current = currentIndex;
    return `${(current / total) * 100}%`;
  };

  return (
    <div className="quiz-question">
      <div className="progress-bar">
        <div className="progress" style={{ width: setProgess() }}></div>
      </div>

      <p className="question">
        {currentIndex + 1}
        {". "}
        {questions[currentIndex].question}
      </p>
      <div className="answers">
        {questions[currentIndex].answers.map((answer) => (
          <p key={answer.aId}>
            <button
              onClick={() => {
                nextQuestion(questions[currentIndex], answer);
              }}
            ></button>
            {answer.answer}
          </p>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
