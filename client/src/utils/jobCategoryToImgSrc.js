import administration from "../img/cropped/administration.jpg";
import beauty from "../img/cropped/beauty.jpg";
import catering from "../img/cropped/catering.jpg";
import cleaning from "../img/cropped/cleaning.jpg";
import construction from "../img/cropped/construction.jpg";
import misc from "../img/cropped/misc.jpg";
import other from "../img/cropped/other.jpg";
import questionnaire from "../img/cropped/questionnaire.jpg";
import sales from "../img/cropped/sales.jpg";
import sport from "../img/cropped/sport.jpg";
import tourism from "../img/cropped/tourism.jpg";
import transport from "../img/cropped/transport.jpg";
import React from "react";

export const jobCategoryToImg = category => {
  return (
    <img
      src={jobCategoryToImgSrc(category)}
      alt=""
      className="image-widescreen"
    />
  );
};

const jobCategoryToImgSrc = category => {
  switch (category) {
    case "Administracija":
      return administration;

    case "Ugostiteljstvo":
      return catering;

    case "Čišćenje":
      return cleaning;

    case "Fizički poslovi":
      return construction;

    case "Sve kategorije":
      return misc;

    case "Ostalo":
      return other;

    case "Anketiranje":
      return questionnaire;

    case "Prodaja":
      return sales;

    case "Ljepota":
      return beauty;

    case "Sport i zdravlje":
      return sport;

    case "Turizam":
      return tourism;

    case "Prijevoz":
      return transport;

    default:
      return;
  }
};
