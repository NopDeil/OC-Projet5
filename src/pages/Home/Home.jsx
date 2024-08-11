import React from "react";
import Banner from "../../components/Banner/Banner";
import banner_home from "../../assets/banner_home.jpg";

function Home() {
  return <Banner image_banner={banner_home} titre_banner="Chez vous, partout et ailleurs" alt_banner="Bannière vue mer"/>;
}

export default Home;
