import React, { useEffect, useState } from "react";
import { scrollTop } from "../../snippets";

const BackToTopButton = () => {
  const [appear, setAppear] = useState(false);

  const listenToScroll = () => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scroll > 300) {
      setAppear(true);
    } else {
      setAppear(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };

    // eslint-disable-next-line
  }, []);

  return (
    <button
      className={appear ? "back-to-top-button appear" : "back-to-top-button"}
      onClick={() => scrollTop()}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default BackToTopButton;
