import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import "../../Styles/Chessboard/Chessboard.css";

const Chessboard = (props) => {
  const { randomizedSquare, handleClick,gameType } = props;


  const passClick = (isCorrectClick) => {
    console.log(gameType)
    handleClick(isCorrectClick);
  };

  const generateSquares = () => {
    let colorHandler = 0;
    let squares = [];
    for (let column = 0; column < 8; column++) {
      for (let row = 0; row < 8; row++) {
        let isRandomizedSquare =
          String.fromCharCode(97 + row) + (8 - column) === randomizedSquare;
        squares.push(
          <Square
            key={column + "" + row}
            className={
              (colorHandler % 2 !== 0 ? "white-square" : "black-square") +
              (isRandomizedSquare && gameType === "practice" ? " randomized-square" : "")
            }
            isRandomizedSquare={isRandomizedSquare}
            column={String.fromCharCode(97 + row)}
            row={8 - column}
            passClick={passClick}
          />
        );
        colorHandler++;
      }
      colorHandler++;
      squares.push(<br />);
    }
    return squares;
  };

  return <div className="chessboard">{generateSquares()}</div>;
};
export default Chessboard;