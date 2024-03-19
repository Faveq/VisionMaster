import React from "react";
import "../../Styles/RightPanel/RightPanel.css"
import Score from "./Score";
import Time from "./Time";
import GameTypeSettings from "./GameTypeSettings";

const RightPanel = () => {

  return <div className="right-panel">
    <Score/>
    <Time/>
    <br/>
    <GameTypeSettings/>
  </div>;
};
export default RightPanel;
