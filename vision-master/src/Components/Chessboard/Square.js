import React from "react";
import "../../Styles/Chessboard/Square.css"

const Square = (props) => {
  const { className, column, row, isRandomizedSquare, passClick } = props;

  const HandleSquareClick = () => {
    passClick(isRandomizedSquare)
  }

  return (
      <div className={"square " + className} onClick={() => HandleSquareClick()}>
        {row===1 && column === 'a' ? <div><span className="row-span">{column}</span> <span className="column-span">{row}</span> </div>: row === 1 ? <span className="row-span">{column}</span> : column === 'a' ? <span className="column-span">{row}</span> :''}
        
      </div>
  )
};
export default Square;
