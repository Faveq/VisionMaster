import React from "react";
import "../../Styles/RightPanel/Score.css"

const Score = (props) => {
  return <h1 className="score-h1">{props.points}</h1>
};
export default Score;
