import React from "react";
import "../../Styles/RightPanel/Score.css";
import { useSelector } from "react-redux";

const Score = () => {
  const game = useSelector((state) => state.game);
  const points = game.points
  const gameType = game.gameType

  return <h1 className={gameType === 'practice' ? "score-h1 hide" : "score-h1"}>{points}</h1>;
};
export default Score;
