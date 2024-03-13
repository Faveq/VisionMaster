import React from "react";
import "../../Styles/RightPanel/RightPanel.css"
import Score from "./Score";
import Time from "./Time";
import GameTypeSettings from "./GameTypeSettings";

const RightPanel = () => {

  return <div className="right-panel">
    <Score/>
    <GameTypeSettings/>
    <Time/>
  </div>;
};
export default RightPanel;
