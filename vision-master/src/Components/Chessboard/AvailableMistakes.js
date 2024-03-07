import React from "react";
import "../../Styles/Chessboard/AvailableMistakes.css"

const AvailableMistakes = (props) => {
  const {availableMistakes} = props
  return (
    <div className="mistakes-number-div">
      <img
        src="Images/mistake-cross.png"
        className={
          (availableMistakes < 3 ? "used" : "") + " mistake-cross"
        }
        alt="mistake-cross"
      />
      <img
        src="Images/mistake-cross.png"
        className={
          (availableMistakes < 2 ? "used" : "") + " mistake-cross"
        }
        alt="mistake-cross"
      />
      <img
        src="Images/mistake-cross.png"
        className={
          (availableMistakes === 0 ? "used" : "") + " mistake-cross"
        }
        alt="mistake-cross"
      />
    </div>
  );
};

export default AvailableMistakes;
