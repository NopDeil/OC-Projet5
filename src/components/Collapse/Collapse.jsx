import "./Collapse.scss";
import { useState } from "react";

function Collaspe({ titleCollapse, textCollapse }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(0);

  const openCollapse = () => {
    setIsOpen(true);
    setAnimation(1);
  };

  const closeCollapse = () => {
    setAnimation(0);
    setTimeout(() => {
      setIsOpen(false);
    }, 590);
  };

  return isOpen ? (
    <div className="collapse" animation={animation}>
      <div className="collapse-header">
        <h2>{titleCollapse}</h2>
        <i
          className="fa-solid fa-chevron-up icone"
          onClick={closeCollapse}
          animation={animation}
        ></i>
      </div>
      <div className="containerText">{textCollapse}</div>
    </div>
  ) : (
    <div className="collapse">
      <h2>{titleCollapse}</h2>
      <i
        className="fa-solid fa-chevron-up icone"
        onClick={openCollapse}
        animation={animation}
      ></i>
    </div>
  );
}

export default Collaspe;
