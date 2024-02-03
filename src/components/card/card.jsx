import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

// handle the answer box -> the card body
function HandleAnswer() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="card__body">
      <button onClick={() => setIsToggled(!isToggled)} type="button" className="card__button card__button--answer">
        show answer
      </button>
      <p className={isToggled ? "card__answer card__answer--display" : "card__answer card__answer--hidden"}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A itaque corporis maiores modi quaerat minus tenetur
      </p>
    </div>
  );
}

// handle the like button
function handleHeart(inactiveHeart, activeHeart) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button type="button" onClick={() => setIsActive(!isActive)} className="card__button card__button--bookmark">
      {isActive ? activeHeart : inactiveHeart}
    </button>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__question">What property flips the axes in flexbox?</h2>
      </div>
      <HandleAnswer />
      <div className="card__tags">
        <button type="button" className="card__button">
          #css
        </button>
        <button type="button" className="card__button">
          #html
        </button>
        <button type="button" className="card__button">
          #flexbox
        </button>
        {handleHeart(
          <FontAwesomeIcon icon={faHeartRegular} style={{ color: "#f25757" }} />,
          <FontAwesomeIcon icon={faHeartSolid} style={{ color: "#f25757" }} />
        )}
      </div>
    </div>
  );
}
export default Card;
