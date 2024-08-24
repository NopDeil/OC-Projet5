import "./Banner.scss";

function Banner({ image_banner, titre_banner, alt_banner }) {
  return (
    <div className="banner">
      <img alt={alt_banner} src={image_banner} />
      {titre_banner ? <h1>{titre_banner}</h1> : null}
    </div>
  );
}

export default Banner;
