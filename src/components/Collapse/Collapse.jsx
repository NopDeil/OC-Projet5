import "./Collapse.scss";
import { useState } from "react";

function Collapse({ titleCollapse, textCollapse }) {
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
    }, 5000);
  };

  return (
    <div className="collapse-container">
      <div className="collapse" animation={animation}>
        <h2>{titleCollapse}</h2>
        <i
          className="fa-solid fa-chevron-up"
          onClick={isOpen ? closeCollapse : openCollapse}
          animation={animation}
        ></i>
      </div>
      {isOpen && (
        <div className="collapseText" animation={animation}>
          {textCollapse}
        </div>
      )}
    </div>
  );
}

export default Collapse;
