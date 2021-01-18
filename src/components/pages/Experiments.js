import React, { useContext, useEffect } from "react";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";

const Experiments = () => {
  const context = useContext(Context);
  const { getExperiments, experiments, loading } = context;

  useEffect(() => {
    getExperiments();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page experiments-page">
      <Header
        header={{
          title: "Deneyler",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/deneyler", "Deneyler"],
          ],
          color: "#3b42f9",
        }}
      />

      <p className="page-info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos at
        tempora ducimus debitis vel odit. Iste pariatur repellat repellendus rem
        minima dicta, vitae dolorem earum recusandae, veniam sequi impedit sunt.
      </p>

      {loading ? (
        <Loading />
      ) : (
        <div className="experiments-container">
          {experiments.map((experiment, index) => (
            <div key={index} className="experiment">
              <h2>
                {experiment.id}
                {". "}
                {experiment.title}
              </h2>
              <div
                className="img"
                style={{ backgroundImage: `url(${experiment.imgPath})` }}
              ></div>
              {experiment.attention.length > 0 && (
                <p className="attention">
                  <i className="fas fa-exclamation-circle"></i>{" "}
                  {experiment.attention}
                </p>
              )}
              <p className="header">{experiment.header}</p>
              <h3>Malzemelerimiz</h3>
              <ul className="ingredients">
                {experiment.ingredients.map((ing, index) => (
                  <li key={index}>
                    <span>{`${index + 1}.`}</span> {ing}
                  </li>
                ))}
              </ul>
              <h3>Deneyin Yapılışı</h3>
              <ul className="steps">
                {experiment.steps.map((step, index) => (
                  <li key={index}>
                    <span>{`${index + 1}.`}</span> {step}
                  </li>
                ))}
              </ul>
              <h3>Deneyin Açıklaması</h3>
              <p className="description">{experiment.description}</p>
              <a href={experiment.source} target="_blank" rel="noreferrer">
                Kaynak
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Experiments;
