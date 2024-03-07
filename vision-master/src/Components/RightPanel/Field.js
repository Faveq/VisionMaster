import React from "react";
import "../../Styles/RightPanel/Field.css"
import { useSelector } from "react-redux";

const Field = () => {
  const randomizedSquare = useSelector(state=>state.game.randomizedSquare)
  return <h1 className="field">{randomizedSquare}</h1>;
};
export default Field;
