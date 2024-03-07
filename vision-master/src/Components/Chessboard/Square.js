import React from "react";
import "../../Styles/Chessboard/Square.css"
import { useDispatch, useSelector } from "react-redux";
import { handleClick} from "../Redux/GameSlice";


const Square = (props) => {
  const { className, column, row, isRandomizedSquare } = props;
  const dispatch = useDispatch()

  return (
      <div className={"square " + className} onClick={() => dispatch(handleClick(isRandomizedSquare))}>
        {row===1 && column === 'a' ? <div><span className="row-span">{column}</span> <span className="column-span">{row}</span> </div>: row === 1 ? <span className="row-span">{column}</span> : column === 'a' ? <span className="column-span">{row}</span> :''}
        
      </div>
  )
};
export default Square;
