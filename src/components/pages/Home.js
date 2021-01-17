import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import Loading from "../layout/Loading";

const Home = () => {
  const context = useContext(Context);
  const { getFacts, facts, loading, getRiddles, riddles } = useContext(Context);

  const setFact = (arr) => {
    const date = new Date();
    return arr[date.getDate()].fact;
  };

  useEffect(() => {
    getRiddles();
    getFacts();

    // eslint-disable-next-line
  }, []);

  const siteLinks = [
    ["/oyunlar", "Oyunlar", "#00b6ff"],
    ["/cizim", "Çizim", "#ffee5b"],
    ["/deneyler", "Deneyler", "#3b42f9"],
    ["/origami", "Origami", "#f4f0a6"],
    ["/quiz", "Quiz", "#29e833"],
    ["/ingilizce", "İngilizce", "#ed25be"],
    ["/bilmece-bulmaca", "Bilmece Bulmaca", "#fa8b68"],
  ];

  return (
    <div className="page home-page">
      <ul className="site-links">
        {siteLinks.map((link, index) => (
          <li key={index} style={{ backgroundColor: `${link[2]}` }}>
            <Link
              to={link[0]}
              onClick={() => {
                context.setActiveLink(link[0]);
              }}
            >
              {link[1]}
            </Link>
          </li>
        ))}
      </ul>

      <div className="showcase">
        <h1>
          Evde<span>Öğren</span>'e Hoşgeldiniz!
        </h1>
        <p>
          Pandemi döneminde evde kalan çocukların eğlenerek öğrenebilmelerini
          sağlayan, oyunlar, etkinlikler, ilginç deneyler ve daha fazlasını
          bulabileceğiniz Evde Öğren'e hoş geldiniz!
        </p>
        <div className="mouse"></div>
      </div>

      <div className="grid">
        <div className="riddle">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Günün Bilmecesi</h2>

          {riddles.map((riddle, index) =>
            riddle.id === new Date().getDate() ? (
              <p key={index}>
                <p className="rid">{riddle.riddle}</p>
                <button className="ans" onClick={() => alert(riddle.answer)}>
                  Cevabı görmek için tıkla
                </button>
              </p>
            ) : null
          )}
        </div>
        <div className="trivia">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Günün Bilgisi</h2>
          <p>
            {facts.map((fact, index) =>
              index === new Date().getDate() ? fact.fact : null
            )}
          </p>
        </div>
        <div className="experiment">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Haftanın Deneyi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            quae!
          </p>
        </div>
        <div className="origami">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Haftanın Origamisi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            quae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
