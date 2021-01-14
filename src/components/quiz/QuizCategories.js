import React from "react";

const QuizCategories = ({ quizes, setSelectedCategory }) => {
  return (
    <ul className="grid categories-grid">
      {quizes.map((item, index) => (
        <li key={index}>
          <button
            style={{ backgroundImage: `url(${item.imgPath})` }}
            onClick={() => setSelectedCategory(item)}
          >
            <p>{item.category}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default QuizCategories;
