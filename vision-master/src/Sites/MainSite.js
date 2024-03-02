import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../Styles/MainSite.css";
import Chessboard from "../Components/Chessboard/Chessboard.js";
import RightPanel from "../Components/RightPanel/RightPanel.js";
import GameController from "../Components/GameController.js";

const MainSite = () => {
  const [cookies, setCookie] = useCookies([
    "gameTypeCookie",
  ]); /*game type: 0 - endless; 1 - time limit; 2 - practice with squares lightened*/
  const [gameType, setGameType] = useState();
  const { randomizeNewSquare, randomizedSquare, handleCorrectClick,restartGame, points } = GameController();

  useEffect(() => {
    randomizeNewSquare();
    if (cookies.gameTypeCookie === undefined) {
      setCookie("gameTypeCookie", 2);
      setGameType(0);
    } else {
      setCookie("gameTypeCookie", 2);
      setGameType(cookies.gameTypeCookie);
    }
  }, []);



  const handleClick = (isCorrectClick) =>{
    if(isCorrectClick)
    {
      handleCorrectClick()
    }else{
      if(gameType !== 2)
      {
      }
      restartGame() /*move up */
    }
  }

  return (
    <div className="main-site-container">
      <div className="chessboard-container">
        <Chessboard handleClick={handleClick} gameType={gameType} randomizedSquare={randomizedSquare} />
      </div>
      <div className="right-panel-container">
        <RightPanel gameType={gameType} points={points} randomizedSquare={randomizedSquare} />
      </div>
    </div>
  );
};

export default MainSite;
