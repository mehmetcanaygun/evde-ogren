import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { scrollTop, changeTitle } from "../../snippets";

const Puzzles = () => {
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);

  const puzzles = [
    {
      title: "Londra",
      peace: 6,
      img: "/assets/img/puzzle-londra.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=251dfe8ded28&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-1"
        ></iframe>
      ),
    },
    {
      title: "Mumlar",
      peace: 6,
      img: "/assets/img/puzzle-mumlar.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=267093edd153&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-2"
        ></iframe>
      ),
    },
    {
      title: "Kedicik",
      peace: 6,
      img: "/assets/img/puzzle-kedicik.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=3107bb558390&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-3"
        ></iframe>
      ),
    },
    {
      title: "Kırmızı Gözlü Kurbağa",
      peace: 6,
      img: "/assets/img/puzzle-kirmizi-gozlu-kurbaga.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=18169d6d064f&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-4"
        ></iframe>
      ),
    },
    {
      title: "Küçük Tatlı Kuşlar",
      peace: 8,
      img: "/assets/img/puzzle-kucuk-tatli-kuslar.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=1c745924d613&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-5"
        ></iframe>
      ),
    },
    {
      title: "Domatesler",
      peace: 9,
      img: "/assets/img/puzzle-domatesler.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=186504332b57&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-6"
        ></iframe>
      ),
    },
    {
      title: "Yaprak",
      peace: 12,
      img: "/assets/img/puzzle-yaprak.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=39be6cb53fa0&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-7"
        ></iframe>
      ),
    },
    {
      title: "Çiçekler",
      peace: 12,
      img: "/assets/img/puzzle-cicekler.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=2bf41017b20a&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-8"
        ></iframe>
      ),
    },
    {
      title: "Düğme Horoz",
      peace: 12,
      img: "/assets/img/puzzle-dugme-horoz.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=1246b51f5989&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-9"
        ></iframe>
      ),
    },
    {
      title: "Pembe Güller",
      peace: 24,
      img: "/assets/img/puzzle-pembe-guller.jpg",
      frame: (
        <iframe
          src="https://www.jigsawplanet.com/?rc=play&amp;pid=299c53c12748&amp;view=iframe"
          style={{ width: "100%", height: "600px" }}
          frameBorder="0"
          allowFullScreen
          title="puzzle-10"
        ></iframe>
      ),
    },
  ];

  useEffect(() => {
    scrollTop();
    changeTitle("Bulmaca");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page puzzles-page">
      <Header
        header={{
          title: "Bulmaca",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/bulmaca", "Bulmaca"],
          ],
          color: "#c897d4",
        }}
      />

      {selectedPuzzle ? (
        <div className="selected-puzzle">
          <button className="back-btn" onClick={() => setSelectedPuzzle(null)}>
            <i className="fas fa-chevron-left"></i> Bulmacalara Geri Dön
          </button>

          {selectedPuzzle}
        </div>
      ) : (
        <ul className="grid puzzle-list">
          {puzzles.map((puzzle, index) => (
            <li key={index}>
              <button
                style={{ backgroundImage: `url(${puzzle.img})` }}
                onClick={() => {
                  setSelectedPuzzle(puzzle.frame);
                  scrollTop();
                }}
              >
                <p>
                  {puzzle.title} - {puzzle.peace} parça
                </p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Puzzles;
