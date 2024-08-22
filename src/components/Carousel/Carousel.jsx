import "./Carousel.scss";
import { useState } from "react";

function Carousel({ carouselPicture, altTitle }) {
  const [count, setCount] = useState(0);

  const previous = () => {
      if(count === 0){
        setCount(carouselPicture.length - 1);
      }else{
        setCount(count - 1);
      }
  }

  const next = () => {
      if(count === carouselPicture.length - 1){
        setCount(0);
      }else{
        setCount(count + 1);
      }
  }

  return carouselPicture.length === 1 ? (
    <div className="carousel">
      <img src={carouselPicture} alt={altTitle} />
    </div>
  ) : (
    <div className="carousel">
      <img src={carouselPicture[count]} alt={altTitle} />
      <i className="fa-solid fa-chevron-left leftarrow" onClick={() => previous()}></i>
      <i className="fa-solid fa-chevron-right rightarrow" onClick={() => next()}></i>
      <span>{count + 1}/{carouselPicture.length}</span>
    </div>
  );
}

export default Carousel;
