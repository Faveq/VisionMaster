import React from "react";
import "../../Styles/RightPanel/GameTypeSettings.css";
import { useDispatch, useSelector } from "react-redux";
import { changeGameType } from "../../Components/Redux/GameSlice";

const GameTypeSettings = () => {
  const gameType = useSelector((state) => state.game.gameType);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Change game mode
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Select game mode
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="m-1">
                <h3>Endless</h3>
                <button
                  type="button"
                  onClick={() => dispatch(changeGameType("endless"))}
                  className={
                    "btn m-1" +
                    (gameType === "endless"
                      ? " btn-primary"
                      : " btn-outline-primary")
                  }
                  name="endless"
                  data-bs-dismiss="modal"
                >
                  Select
                </button>
              </div>
              <div className="m-1">
                <h3>Time limit</h3>
                <button
                  type="button"
                  onClick={() => dispatch(changeGameType("oneMinute"))}
                  className={
                    "btn m-1" +
                    (gameType === 'oneMinute' ? " btn-primary" : " btn-outline-primary")
                  }
                  name="timeLimit"
                  data-bs-dismiss="modal"
                >
                  1 min
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(changeGameType("threeMinutes"))}
                  className={
                    "btn m-1" +
                    (gameType === "threeMinutes" ? " btn-primary" : " btn-outline-primary")
                  }
                  name="timeLimit"
                  data-bs-dismiss="modal"
                >
                  3 min
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(changeGameType("fiveMinutes"))}
                  className={
                    "btn m-1" +
                    (gameType === 'fiveMinutes' ? " btn-primary" : " btn-outline-primary")
                  }
                  name="timeLimit"
                  data-bs-dismiss="modal"
                >
                  5 min
                </button>
              </div>
              <div className="m-1">
                <h3>Practice</h3>
                <button
                  type="button"
                  onClick={() => dispatch(changeGameType("practice"))}
                  className={
                    "btn m-1" +
                    (gameType === "practice"
                      ? " btn-primary"
                      : " btn-outline-primary")
                  }
                  name="practice"
                  data-bs-dismiss="modal"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTypeSettings;
