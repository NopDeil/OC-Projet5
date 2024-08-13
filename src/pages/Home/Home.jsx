import React from "react";
import Banner from "../../components/Banner/Banner";
import banner_home from "../../assets/banner_home.jpg";
import Gallery from "../../components/Gallery/Gallery";
import "./home.scss";

function Home() {
  return (
    <React.Fragment>
      <Banner
        image_banner={banner_home}
        titre_banner="Chez vous, partout et ailleurs"
        alt_banner="Bannière vue mer"
      />
      <Gallery/>
    </React.Fragment>
  );
}

export default Home;
