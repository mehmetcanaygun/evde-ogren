import React, { useContext, useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import Loading from "../layout/Loading";
import { scrollTop, changeTitle } from "../../snippets";

const Home = () => {
  const context = useContext(Context);
  const { getFacts, facts, loading, getRiddles, riddles } = useContext(Context);

  const [riddleAns, setRiddleAns] = useState(false);

  const experiments = [
    "Yumurta Yiyen Canavar",
    "Sihirli Çubuk Şeker",
    "Görünmez Yazılar",
    "Dans Eden Sevimli Hayalet",
    "Kendi Kendine Şişen Balonlar",
    "Sıvı Sabunla Giden Gemi",
    "Parıldayan Jöle",
    "Pipet ile Patates Delme",
    "Şekeri Farklı Isılarda Çözme",
    "Suda Yüzen Yumurta",
  ];

  const origamis = [
    "Buldog",
    "Kedi",
    "Zürafa",
    "Timsah",
    "Fil",
    "Aslan",
    "Gergedan",
    "Kaplumbağa",
    "Kuğu",
    "Baykuş",
  ];

  const setXOfTheWeek = (arr, link, d) => {
    let returnVal = "";

    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

    if (["0", "10", "20", "30", "40", "50"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["1", "11", "21", "31", "41", "51"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["2", "12", "22", "32", "42", "52"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["3", "13", "23", "33", "43"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["4", "14", "24", "34", "44"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["5", "15", "25", "35", "45"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["6", "16", "26", "36", "46"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["7", "17", "27", "37", "47"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["8", "18", "28", "38", "48"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    } else if (["9", "19", "29", "39", "49"].includes(`${weekNo}`)) {
      returnVal = arr[weekNo];
    }

    return (
      <Fragment>
        <h3>{returnVal}</h3>
        <Link to={link}>
          <i className="fas fa-long-arrow-alt-right"></i> Detaylar için sayfaya
          git
        </Link>
      </Fragment>
    );
  };

  useEffect(() => {
    getRiddles();
    getFacts();

    scrollTop();
    changeTitle("Anasayfa");

    // eslint-disable-next-line
  }, []);

  const siteLinks = [
    ["/oyunlar", "Oyunlar", "#00b6ff"],
    ["/cizim", "Çizim", "#ffee5b"],
    ["/deneyler", "Deneyler", "#3b42f9"],
    ["/origami", "Origami", "#f4f0a6"],
    ["/quiz", "Quiz", "#29e833"],
    ["/ingilizce-ogren", "İngilizce Öğren", "#ed25be"],
    ["/bilmece", "Bilmece", "#fa8b68"],
    ["/bulmaca", "Bulmaca", "#c897d4"],
  ];

  if (loading) {
    return (
      <div className="page">
        <Loading />
      </div>
    );
  }

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
          Evde<span>Öğren</span>'e Hoş Geldiniz!
        </h1>
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
              <div className="container" key={index}>
                <p className="rid">{riddle.riddle}</p>
                <button
                  className={riddleAns ? "ans toggled" : "ans"}
                  onClick={() => {
                    setRiddleAns(true);
                    setTimeout(() => {
                      setRiddleAns(false);
                    }, 3000);
                  }}
                >
                  <p>Cevabı görmek için tıkla</p>
                  <p>{riddle.answer}</p>
                </button>
              </div>
            ) : null
          )}
        </div>

        <div className="trivia">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Günün Bilgisi</h2>
          <div className="container">
            {facts.map((fact, index) =>
              index === new Date().getDate() ? fact.fact : null
            )}
          </div>
        </div>

        <div className="experiment">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Haftanın Deneyi</h2>
          <div className="container">
            {setXOfTheWeek(experiments, "/deneyler", new Date())}
          </div>
        </div>

        <div className="origami">
          <span className="icon">
            <i className="fas fa-star"></i>
          </span>
          <h2>Haftanın Origamisi</h2>
          <div className="container">
            {setXOfTheWeek(origamis, "/origami", new Date())}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
