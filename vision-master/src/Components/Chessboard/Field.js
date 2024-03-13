import React from "react";
import "../../Styles/Chessboard/Field.css"
import { useSelector } from "react-redux";

const Field = () => {
  const randomizedSquare = useSelector(state=>state.game.randomizedSquare)
  return <p className="field">{randomizedSquare}</p>;
};
export default Field;
