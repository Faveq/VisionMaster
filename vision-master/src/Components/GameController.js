import { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { ChangeGameType } from "./Redux/GameSlice";

const GameController = () => {
  const [points, setPoints] = useState(0);
  const [availableMistakes, setAvailableMistakes] = useState(3);
  const [randomizedSquare, setRandomizedSquare] = useState("");
  const { elapsedTime, isRunning, startStop, resetTime } = Stopwatch();

  const gameType = useSelector(state => state.game.gameType)
  const dispatch = useDispatch()
  
  
  const updateGameType = (passedGameType) =>{
    dispatch(ChangeGameType(passedGameType))
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
    randomizeNewSquare();
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

  const resetPoints = () => {
    setPoints(0);
  };

  const increasePoints = () => {
    setPoints((prevPoints) => prevPoints + 1);
  };

  const startGame = () => {};

  const randomizeNewSquare = () => {
    setRandomizedSquare(
      String.fromCharCode(Math.floor(Math.random() * (104 - 97 + 1)) + 97) +
        +(Math.floor(Math.random() * 8) + 1)
    );
  };

  const handleCorrectClick = () => {
    randomizeNewSquare();
    increasePoints();
  };

  const handleWrongClick = () => {
    if (availableMistakes > 1) {
      setAvailableMistakes((prevState) => prevState - 1);
    } else {
      randomizeNewSquare();
      resetPoints();
      resetTime();
      setAvailableMistakes(3);
    }
  };

  return {
    randomizeNewSquare,
    randomizedSquare,
    handleWrongClick,
    handleCorrectClick,
    points,
    availableMistakes,
    startStop,
    gameType,
    updateGameType,
    gameTypes
  };
};
export default GameController;
