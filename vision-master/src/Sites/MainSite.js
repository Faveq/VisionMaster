import React, { useState, useEffect } from "react";

import "../Styles/MainSite.css";
import Chessboard from "../Components/Chessboard/Chessboard.js";
import RightPanel from "../Components/RightPanel/RightPanel.js";
import GameController from "../Components/GameController.js";
import AvailableMistakes from "../Components/Chessboard/AvailableMistakes.js";
import "bootstrap/dist/css/bootstrap.min.css";

const MainSite = () => {
  const [isFirstClick, setIsFirstClick] = useState(true);
  const {
    randomizeNewSquare,
    randomizedSquare,
    handleCorrectClick,
    handleWrongClick,
    points,
    availableMistakes,
    startStop,
    gameType
  } = GameController();

 

  const handleClick = (isCorrectClick) => {
    console.log(gameType)
    if (isFirstClick) {
      startStop()
    }
    if (isCorrectClick) {
      handleCorrectClick();
    } else {
      if (gameType !== "practice") {
      }
      handleWrongClick(); /*move up */
    }
  };

  return (
    <div className="main-site-container">
      <div className="chessboard-container">
        <Chessboard
          handleClick={handleClick}
          gameType={gameType}
          randomizedSquare={randomizedSquare}
        />
        <AvailableMistakes availableMistakes={availableMistakes} />
      </div>
      <div className="right-panel-container">
        <RightPanel
          gameType={gameType}
          points={points}
          randomizedSquare={randomizedSquare}
        />
      </div>
    </div>
  );
};

export default MainSite;
