import { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addPoint, changeGameType, removeOneMistake, resetGame } from "./Redux/GameSlice";

const GameController = () => {
  const [randomizedSquare, setRandomizedSquare] = useState("");
  const { elapsedTime, isRunning, startStop, resetTime } = Stopwatch();
  const game = useSelector(state => state.game)
  const gameType = game.gameType
  const availableMistakes = game.availableMistakes
  const dispatch = useDispatch()
  
  
  const updateGameType = (passedGameType) =>{
    dispatch(changeGameType(passedGameType))
  }

  const [cookies, setCookie] = useCookies([
    "gameTypeCookie",
  ]); 
  const gameTypes = {
    endless: "endless",
    oneMinute: "oneMinute",
    threeMinutes: "threeMinutes",
    fiveMinutes:  "fiveMinutes",
    practice: "practice"
}

  useEffect(() => {
    if (cookies.gameTypeCookie === undefined) {
      setCookie("gameTypeCookie", gameTypes["practice"]);
      updateGameType("practice");
    } else {
      setCookie("gameTypeCookie", gameTypes["practice"]);
      updateGameType(cookies.gameTypeCookie);
    }
  }, []);

  useEffect(() => {
    console.log(gameType)
  }, [gameType]);

  const increasePoints = () => {
    dispatch(addPoint())
  };

  const startGame = () => {};

 

  return {
    startStop,
  };
};
export default GameController;
