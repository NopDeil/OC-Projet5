import React from "react";
import "./Banner.scss";

function Banner({ image_banner, titre_banner, alt_banner }) {
  return (
    <section className="banner">
      <img alt={alt_banner} src={image_banner} />
      {titre_banner ? <h1>{titre_banner}</h1> : null}
    </section>
  );
}

export default Banner;
