import { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { useCookies } from "react-cookie";

const GameController = () => {
  const [points, setPoints] = useState(0);
  const [availableMistakes, setAvailableMistakes] = useState(3);
  const [randomizedSquare, setRandomizedSquare] = useState("");
  const { elapsedTime, isRunning, startStop, resetTime } = Stopwatch();
  const [gameType, setGameType] = useState();
  const [cookies, setCookie] = useCookies([
    "gameTypeCookie",
  ]); /*game type: 0 - endless; 1 - time limit (60, 180, 300 - time limits in seconds); 2 - practice with squares lightened ; values in array represents time limits ; 0,1,2 are array indexes*/
  const gameTypes = {
    endless: "endless",
    timeLimit: [60, 180, 300],
    practice: "practice"
  }

  useEffect(() => {
    randomizeNewSquare();
    if (cookies.gameTypeCookie === undefined) {
      setCookie("gameTypeCookie", gameTypes["practice"]);
      setGameType(gameTypes["practice"]);
    } else {
      setCookie("gameTypeCookie", gameTypes["practice"]);
      setGameType(cookies.gameTypeCookie);
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
    setGameType,
    gameTypes
  };
};
export default GameController;
