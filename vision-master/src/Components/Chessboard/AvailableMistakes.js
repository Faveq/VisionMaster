import React from "react";
import "../../Styles/Chessboard/AvailableMistakes.css";
import { useSelector } from "react-redux";

const AvailableMistakes = () => {
  const game = useSelector(state => state.game);
  const gameType = game.gameType
  const availableMistakes = game.availableMistakes

  return (
    <div className={gameType === 'endless' || gameType === 'practice' ? "hide" : "mistakes-number-div"}>
      <img
        src={process.env.PUBLIC_URL + '/Images/mistake-cross.png'}
        className={(availableMistakes < 3 ? "used" : "") + " mistake-cross"}
        alt="mistake-cross"
      />
      <img
        src={process.env.PUBLIC_URL + '/Images/mistake-cross.png'}
        className={(availableMistakes < 2 ? "used" : "") + " mistake-cross"}
        alt="mistake-cross"
      />
      <img
        src={process.env.PUBLIC_URL + '/Images/mistake-cross.png'}
        className={(availableMistakes === 0 ? "used" : "") + " mistake-cross"}
        alt="mistake-cross"
      />
    </div>
  );
};

export default AvailableMistakes;
