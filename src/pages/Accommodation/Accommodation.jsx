import "./Accommodation.scss";
import Carousel from "../../components/Carousel/Carousel";
import Collapse from "../../components/Collapse/Collapse";
import Datas from "../../datas/infos.json";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Vérification de l'existence de données et redirection si ce n'est pas le cas
  const dataInfos = Datas.find((data) => data.id === id);
  useEffect(() => {
    if (dataInfos === undefined) {
      navigate("/error");
    }
  }, [dataInfos, navigate]);

  if (!dataInfos) return null;

  const createTags = dataInfos.tags;
  console.log(createTags);

  const tags = () => {
    return createTags.map((tag) => (
      <span key={`${tag}-${dataInfos.id}`}>{tag}</span>
    ));
  };

  const stars = [1, 2, 3, 4, 5];
  const rating = () => {
    return stars.map((star) => {
      return dataInfos.rating >= star ? (
        <i
          key={`${star}-${dataInfos.id}`}
          className=" fa-solid fa-star star"
        ></i>
      ) : (
        <i
          key={`${star}-${dataInfos.id}`}
          className=" fa-solid fa-star disableStars"
        ></i>
      );
    });
  };

  const equipments = dataInfos.equipments;

  return (
    <React.Fragment>
      <section className="accommodation">
        <Carousel
          carouselPicture={dataInfos.pictures}
          altTitle={dataInfos.title}
        />
        {console.log(dataInfos.pictures.length)}
      </section>
      <section className="accommodation">
        <div className="accommodation-description">
          <div>
            <h2>{dataInfos.title}</h2>
            <span>{dataInfos.location}</span>
          </div>
          <div className="hostInfos">
            <span key={`${dataInfos.host.name}-${dataInfos.id}`}>
              {dataInfos.host.name}
            </span>
            <img
              className="hostBox"
              src={dataInfos.host.picture}
              alt={dataInfos.host.name}
            />
          </div>
        </div>
        <div className="tagStars">
          <div className="tags">{tags()}</div>
          <div>{rating()}</div>
        </div>
      </section>
      <section className="description-equipment">
        <Collapse
          titleCollapse="Description"
          textCollapse={dataInfos.description}
        />
        <Collapse
          titleCollapse="Équipments"
          textCollapse={
            <ul>
              {equipments.map((equipment) => {
                return (
                  <li key={`${equipment}-${dataInfos.id}`}>{equipment}</li>
                );
              })}
            </ul>
          }
        />
      </section>
    </React.Fragment>
  );
}

export default Accommodation;
