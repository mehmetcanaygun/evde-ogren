import React, { useContext, useEffect } from "react";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";

const Riddles = () => {
  const context = useContext(Context);
  const { getRiddles, riddles, loading } = context;

  useEffect(() => {
    getRiddles();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page riddles-page">
      <Header
        header={{
          title: "Bilmece",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/bilmece", "Bilmece"],
          ],
          color: "#fa8b68",
        }}
      />

      {loading ? (
        <Loading />
      ) : (
        <div className="riddles-container">
          <ul className="riddle-list">
            {riddles.map((riddle, index) => (
              <li
                key={index}
                onClick={(e) => {
                  if (e.target.tagName === "SPAN" || e.target.tagName === "I") {
                    e.target.parentElement.parentElement.classList.toggle(
                      "toggled"
                    );
                  } else {
                    e.target.parentElement.classList.toggle("toggled");
                  }
                }}
              >
                <p className="riddle">
                  <span>{index + 1}.</span>
                  <span>{riddle.riddle}</span>
                </p>
                <p className="answer">&#8212; {riddle.answer}</p>
                <span className="icon">
                  <i className="fas fa-chevron-up"></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Riddles;
