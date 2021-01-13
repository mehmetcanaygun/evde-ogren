import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";

const Home = () => {
  const context = useContext(Context);

  const siteLinks = [
    ["/oyunlar", "Oyunlar", "#00b6ff"],
    ["/cizim", "Çizim", "#ffee5b"],
    ["/deneyler", "Deneyler", "#3b42f9"],
    ["/origami", "Origami", "#f4f0a6"],
    ["/quiz", "Quiz", "#29e833"],
    ["/ingilizce", "İngilizce", "#ed25be"],
    ["/bilmece-bulmaca", "Bilmece Bulmaca", "#fa8b68"],
    ["/galeri", "Fotoğraf Galerisi", "#f93b3b"],
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
          Çeşitli oyunlar, deneyler, bilmeceler ve çok daha fazlası ile evde
          aileniz ve sevdiklerinizle keyifli vakit geçirin!
        </p>
        <div className="mouse"></div>
      </div>

      <div className="grid">
        <div className="riddle">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Günün Bilmecesi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            quae!
          </p>
        </div>
        <div className="trivia">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Günün Bilgisi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            quae!
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
