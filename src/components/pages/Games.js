import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import Header from "../layout/Header";
import Loading from "../layout/Loading";

const Games = () => {
  const context = useContext(Context);
  const { loading, getGames, games } = context;

  useEffect(() => {
    getGames();

    // eslint-disable-next-line
  }, []);

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

      {loading ? (
        <Loading />
      ) : (
        <div className="grid">
          {games.map((game) => (
            <Link
              key={game.id}
              to={`/oyunlar/${game.name}`}
              style={{
                backgroundImage: `url(${`/assets/img/${game.name}.jpg`})`,
              }}
            >
              <p>{game.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
