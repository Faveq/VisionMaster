import React from "react";
import "../../Styles/RightPanel/Time.css"
import { useSelector } from "react-redux";

const Time = () => {
  const game = useSelector(state => state.game);
  const time = game.time
  const gameType = game.gameType
  return <h2 className={gameType === 'endless' || gameType === 'practice' ? "hide" : "time"}>{Math.floor(time/60)}:{(time%60).toString().padStart(2, '0')}</h2>
}
export default Time;
