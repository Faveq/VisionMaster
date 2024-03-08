import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame} from "./Redux/GameSlice";
/* global bootstrap */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const GameResult = () => {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch()
  const isGameFinished = game.isGameFinished;
  const score = game.points;
  const highScore = game.highScore
  const [newHighScoreSet, setNewHighScoreSet] = useState(false);

  useEffect(() => {
    if (isGameFinished) {
      new bootstrap.Modal(document.getElementById("summaryModal")).show();
    }
  }, [isGameFinished]);

  useEffect(() => {
    setNewHighScoreSet(true)
  }, [highScore]);

  return (
    <div
    className="modal fade"
      id="summaryModal"
      tabIndex="-1"
      aria-labelledby="summaryModalLabel"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="summaryModalLabel">
              Summary
            </h1>
          </div>
            <div className="modal-body"><h2 className={!newHighScoreSet ? "hide" : ""}>New record!!!</h2>Score: {score}<br/>Record:  {highScore}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={()=>dispatch(resetGame())} data-bs-dismiss="modal">
              Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
