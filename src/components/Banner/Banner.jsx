import React from "react";

function Banner({ image, texte, alt }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt={alt} />
      <div className="banner__sombre"></div>
      <span className="banner__txt">{texte}</span>
    </div>
  );
}

export default Banner;
