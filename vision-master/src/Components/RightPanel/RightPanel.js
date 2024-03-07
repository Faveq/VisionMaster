import React from "react";
import "../../Styles/RightPanel/RightPanel.css"
import Score from "./Score";
import Time from "./Time";
import Field from "./Field";
import GameTypeSettings from "./GameTypeSettings";

const RightPanel = (props) => {
  const  {randomizedSquare, points } = props

  return <div className="right-panel">
    <Score points={points}/>
    <GameTypeSettings/>
    <Time/>

    <Field randomizedSquare={randomizedSquare}/>
  </div>;
};
export default RightPanel;
