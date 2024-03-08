import React, { useState, useEffect } from "react";

import "../Styles/MainSite.css";
import Chessboard from "../Components/Chessboard/Chessboard.js";
import RightPanel from "../Components/RightPanel/RightPanel.js";
import GameController from "../Components/GameController.js";
import AvailableMistakes from "../Components/Chessboard/AvailableMistakes.js";
import "bootstrap/dist/css/bootstrap.min.css";
import GameResult from "../Components/GameResults.js";

const MainSite = () => {
  const gamectrl = GameController()
  return (
    <div className="main-site-container">
      <div className="chessboard-container">
        <Chessboard
        />
        <AvailableMistakes />
      </div>
      <div className="right-panel-container">
        <RightPanel
        />
      </div>
      <GameResult/>
    </div>
  );
};

export default MainSite;
