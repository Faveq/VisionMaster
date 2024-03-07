import React from "react";
import "../../Styles/RightPanel/GameTypeSettings.css";
import GameController from "../GameController";
const GameTypeSettings = (props) => {
    const {gameType, setGameType, gameTypes} = GameController()

  const handleClick = (event)=>{
  }

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
                    <button type="button" onClick={(event)=>setGameType(gameTypes[event.target.name])} className={"btn m-1" + (gameType ===  "endless"? " btn-primary" : " btn-outline-primary")} name="endless" data-bs-dismiss="modal">Select</button>
                </div>
                <div className="m-1">
                    <h3>Time limit</h3>
                    <button type="button" onClick={(event)=>setGameType(gameTypes[event.target.name][0])} className={"btn m-1" + (gameType ===  60? " btn-primary" : " btn-outline-primary")} name="timeLimit" data-bs-dismiss="modal">1 min</button>
                    <button type="button" onClick={(event)=>setGameType(gameTypes[event.target.name][1])} className={"btn m-1" + (gameType ===  180? " btn-primary" : " btn-outline-primary")} name="timeLimit" data-bs-dismiss="modal">3 min</button>
                    <button type="button" onClick={(event)=>setGameType(gameTypes[event.target.name][2])} className={"btn m-1" + (gameType ===  300? " btn-primary" : " btn-outline-primary")} name="timeLimit" data-bs-dismiss="modal">5 min</button>
                </div>
                <div className="m-1">
                    <h3>Practice</h3>
                    <button type="button" onClick={(event)=>setGameType(gameTypes[event.target.name])} className={"btn m-1" + (gameType ===  "practice"? " btn-primary" : " btn-outline-primary")} name="practice" data-bs-dismiss="modal">Select</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTypeSettings;
