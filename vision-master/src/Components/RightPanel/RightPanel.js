import React from "react";
import "../../Styles/RightPanel/RightPanel.css"
import Score from "./Score";
import Time from "./Time";
import Field from "./Field";
import GameTypeSettings from "./GameTypeSettings";

const RightPanel = () => {

  return <div className="right-panel">
    <Score/>
    <GameTypeSettings/>
    <Time/>

    <Field/>
  </div>;
};
export default RightPanel;
