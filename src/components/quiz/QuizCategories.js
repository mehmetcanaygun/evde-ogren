import React from "react";
import { scrollTop } from "../../snippets";

const QuizCategories = ({ quizes, setSelectedCategory }) => {
  return (
    <ul className="grid categories-grid">
      {quizes.map((item, index) => (
        <li key={index}>
          <button
            style={{ backgroundImage: `url(${item.imgPath})` }}
            onClick={() => {
              setSelectedCategory(item);
              scrollTop();
            }}
          >
            <p>{item.category}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default QuizCategories;
