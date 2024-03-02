import React from "react";
import "../../Styles/RightPanel/RightPanel.css"
import Score from "./Score";
import Time from "./Time";
import Field from "./Field";

const RightPanel = (props) => {
  const  { gameType, randomizedSquare, points } = props

  return <div className="right-panel">
    <Score points={points}/>
    <Time/>
    <Field randomizedSquare={randomizedSquare}/>
  </div>;
};
export default RightPanel;
