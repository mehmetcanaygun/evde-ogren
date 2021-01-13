import React from "react";
import Header from "../layout/Header";

const SingleGame = (props) => {
  return (
    <div className="page single-game-page">
      <Header
        header={{
          title: `Oyun - ${props.match.params.name}`,
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/oyunlar", "Oyunlar"],
            [
              `/oyunlar/${props.match.params.name}`,
              `${props.match.params.name}`,
            ],
          ],
          color: "#00b6ff",
        }}
      />

      <div className="game">
        <iframe
          src={`https://cdn.htmlgames.com/${props.match.params.name}/`}
          title="game-frame"
          width="840"
          height="480"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default SingleGame;
