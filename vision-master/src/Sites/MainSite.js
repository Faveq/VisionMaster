import React, { useState, useEffect } from "react";

import "../Styles/MainSite.css";
import Chessboard from "../Components/Chessboard/Chessboard.js";
import RightPanel from "../Components/RightPanel/RightPanel.js";
import GameController from "../Components/GameController.js";
import AvailableMistakes from "../Components/Chessboard/AvailableMistakes.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const MainSite = () => {
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
    </div>
  );
};

export default MainSite;
