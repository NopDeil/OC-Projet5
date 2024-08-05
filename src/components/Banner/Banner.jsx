import React from "react";
import "../../styles/Banner.scss";
import { useLocation } from 'react-router-dom';
import banner_home from "../../assets/banner_home.jpg";
import banner_about from "../../assets/banner_about.jpg";


function Banner() {

const location = useLocation();
const locationPath = location.pathname;


  return (
    <section>
      <img  alt="bannière paysage" src={locationPath === "/" ? banner_home : banner_about } /> 
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
