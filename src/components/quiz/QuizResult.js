import React from "react";

const QuizEnd = ({ selectedCategory, wrong }) => {
  const setReactionGif = () => {
    if (wrong.length === 0) {
      return "https://media.giphy.com/media/xT8qBepJQzUjXpeWU8/source.gif";
    } else if (
      wrong.length > 0 &&
      wrong.length < selectedCategory.questions.length
    ) {
      return "https://media.giphy.com/media/26gsobowozGM9umBi/giphy.gif";
    } else {
      return "https://media.giphy.com/media/tZiLOffTNGoak/source.gif";
    }
  };

  return (
    <div className="quiz-result">
      <h2>Quiz bitti! Hadi ne kadar başarılı olduğuna bakalım!</h2>
      <p className="info">
        {selectedCategory.questions.length} sorudan{" "}
        <span>{selectedCategory.questions.length - wrong.length}</span> tanesini
        doğru yanıtlamışsın!
      </p>
      <div className="img">
        <img src={setReactionGif()} alt="Result reaction gif" />
      </div>
      {wrong.length > 0 && (
        <div className="failed-questions">
          <h3>Yanlış yanıtladığın sorular şunlar: </h3>
          {wrong.map((w, index) => (
            <p key={index}>
              {w.failedQuestion} - <span>{w.correctAnswer}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizEnd;
