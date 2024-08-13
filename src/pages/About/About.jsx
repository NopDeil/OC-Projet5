import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import React from "react";
import banner_about from '../../assets/banner_about.jpg'
import "./About.scss";

function About() {
  return (
    <React.Fragment>
      <Banner titre_banner="" image_banner={banner_about} alt_banner="Bannière vue montagne"/>
      <section className="about">
        <Collapse titleCollapse="Fiabilité" textCollapse="Les annonces postées sur Kasa garentissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
        <Collapse titleCollapse="Respect" textCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme"/>
        <Collapse titleCollapse="Service" textCollapse="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <Collapse titleCollapse="Sécurité" textCollapse="La sécurité est la priorité de Kasa. Aussi bien nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </section>
    </React.Fragment>
  );
}

export default About;
