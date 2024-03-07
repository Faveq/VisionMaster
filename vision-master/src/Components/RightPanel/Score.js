import React from "react";
import "../../Styles/RightPanel/Score.css";
import { useSelector } from "react-redux";

const Score = () => {
  const points = useSelector((state) => state.game.points);
  return <h1 className="score-h1">{points}</h1>;
};
export default Score;
