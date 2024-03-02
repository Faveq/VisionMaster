import React from "react";
import "../../Styles/RightPanel/Field.css"

const Field = (props) => {
  const {randomizedSquare} = props
  return <h1 className="field">{randomizedSquare}</h1>;
};
export default Field;
