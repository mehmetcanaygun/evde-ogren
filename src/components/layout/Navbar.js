import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";

const Navbar = () => {
  const [menuToggled, setMenuToggled] = useState(false);

  const context = useContext(Context);
  const { activeLink, setActiveLink } = context;

  const isActive = (path) => {
    return activeLink === path;
  };

  const links = [
    ["/", "Anasayfa"],
    ["/hakkinda", "Hakkında"],
    ["/oyunlar", "Oyunlar"],
    ["/cizim", "Çizim"],
    ["/deneyler", "Deneyler"],
    ["/origami", "Origami"],
    ["/quiz", "Quiz"],
    ["/ingilizce", "İngilizce"],
    ["/bilmece", "Bilmece", "#fa8b68"],
    ["/bulmaca", "Bulmaca", "#c897d4"],
  ];

  // Disable scroll bar when menu is toggled
  if (menuToggled) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  return (
    <header className="navbar" data-aos="fade-down">
      <a href="/" className="navbar-logo">
        Evde <span>Öğren</span>
      </a>
      <nav className={menuToggled ? "navbar-nav toggled" : "navbar-nav"}>
        <ul>
          {links.map((link, index) => (
            <li key={index} className={isActive(link[0]) ? "active" : ""}>
              <Link
                to={link[0]}
                onClick={() => {
                  setMenuToggled(false);
                  setActiveLink(link[0]);
                }}
              >
                {link[1]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={menuToggled ? "navbar-btn toggled" : "navbar-btn"}
        onClick={() => setMenuToggled(!menuToggled)}
      >
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </button>
    </header>
  );
};

export default Navbar;
