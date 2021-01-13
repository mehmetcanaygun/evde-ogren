import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header";

const Games = () => {
  return (
    <div className="page games-page">
      <Header
        header={{
          title: "Oyunlar",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/oyunlar", "Oyunlar"],
          ],
          color: "#00b6ff",
        }}
      />

      <p className="page-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab animi,
        assumenda quasi unde labore minima laborum ipsam voluptatem totam?
      </p>

      <div className="grid">
        <Link
          to="/oyunlar/TetrisFun"
          style={{
            backgroundImage: `url(${
              require("../../assets/img/TetrisFun.jpg").default
            })`,
          }}
        >
          <p>TetrisFun</p>
        </Link>
        <Link
          to="/oyunlar/BreakTris"
          style={{
            backgroundImage: `url(${
              require("../../assets/img/BreakTris.jpg").default
            })`,
          }}
        >
          <p>BreakTris</p>
        </Link>
        <Link
          to="/oyunlar/Minesweeper"
          style={{
            backgroundImage: `url(${
              require("../../assets/img/Minesweeper.jpg").default
            })`,
          }}
        >
          <p>Minesweeper</p>
        </Link>
        <Link
          to="/oyunlar/BubbleTrouble"
          style={{
            backgroundImage: `url(${
              require("../../assets/img/BubbleTrouble.jpg").default
            })`,
          }}
        >
          <p>BubbleTrouble</p>
        </Link>
      </div>
    </div>
  );
};

export default Games;
