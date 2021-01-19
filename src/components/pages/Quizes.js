import React, { useEffect, useContext, useState } from "react";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";
import QuizCategories from "../quiz/QuizCategories";
import QuizQuestion from "../quiz/QuizQuestion";
import QuizResult from "../quiz/QuizResult";
import { scrollTop, changeTitle } from "../../snippets";

const Quizes = () => {
  const context = useContext(Context);
  const { getQuizes, quizes, loading } = context;

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrong, setWrong] = useState([]);
  const [quizEnd, setQuizEnd] = useState(false);

  // Next Question
  const nextQuestion = (q, a) => {
    // Check if answer is wrong
    if (!a.correct) {
      // Store that question with correct answer to display at the end
      setWrong([
        ...wrong,
        {
          failedQuestion: q.question,
          correctAnswer: q.answers.filter((a) => a.correct)[0].answer,
        },
      ]);
    }

    // Go to the next question if there is any
    // End the quiz otherwise
    if (currentIndex < selectedCategory.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizEnd(true);
    }
  };

  useEffect(() => {
    getQuizes();

    scrollTop();
    changeTitle("Quiz");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page quizes-page">
      <Header
        header={{
          title: "Quiz",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/quiz", "Quiz"],
          ],
          color: "#29e833",
        }}
      />

      {loading ? (
        <Loading />
      ) : selectedCategory ? (
        <div className="quiz-container">
          <button
            className="back-btn"
            onClick={() => {
              setSelectedCategory(null);
              setQuizEnd(false);
              setCurrentIndex(0);
              setWrong([]);
            }}
          >
            <i className="fas fa-chevron-left"></i> Kategorilere Geri Dön
          </button>

          {quizEnd ? (
            <QuizResult selectedCategory={selectedCategory} wrong={wrong} />
          ) : (
            <QuizQuestion
              selectedCategory={selectedCategory}
              currentIndex={currentIndex}
              nextQuestion={nextQuestion}
            />
          )}
        </div>
      ) : (
        <div className="categories-container">
          <QuizCategories
            quizes={quizes}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      )}
    </div>
  );
};

export default Quizes;
