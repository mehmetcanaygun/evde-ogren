import React from "react";
import Header from "../layout/Header";

const About = () => {
  return (
    <div className="page about-page">
      <Header
        header={{
          title: "Hakkında",
          breadcrumbs: [
            ["/", "Anasayfa"],
            ["/hakkinda", "Hakkında"],
          ],
          color: "#d82158",
        }}
      />

      <p className="page-info">
        Pandemi döneminde evde kalan çocukların eğlenerek öğrenebilmelerini
        sağlayan, oyunlar, etkinlikler, ilginç deneyler ve daha fazlasını
        bulabileceğiniz Evde Öğren'e hoş geldiniz!
      </p>
    </div>
  );
};

export default About;
