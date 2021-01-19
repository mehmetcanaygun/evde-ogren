import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollTop, changeTitle } from "../../snippets";

const NotFound = () => {
  useEffect(() => {
    scrollTop();
    changeTitle("Sayfa Bulunamadı");

    // eslint-disable-next-line
  }, []);

  return (
    <div className="page not-found-page">
      <h2 style={{ marginBottom: "40px" }}>
        Maalesef aradığınız sayfayı bulamadık.
      </h2>
      <Link to="/" style={{ color: "magenta" }}>
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFound;
