import { useState } from "react";

const GameController = (gameType) => {
  const [points, setPoints] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [randomizedSquare, setRandomizedSquare] = useState("");

  const resetPoints = () => {
    setPoints(0);
  };

  const resetTime = () => {
    setElapsedTime(0);
  };

  const increasePoints = () =>{
    setPoints((prevPoints) => prevPoints +1);
  }

  const randomizeNewSquare = () => {
    setRandomizedSquare(
      String.fromCharCode(Math.floor(Math.random() * (104 - 97 + 1)) + 97) +
        +(Math.floor(Math.random() * 8) + 1)
    );
  };

  const handleCorrectClick = () => {
    randomizeNewSquare()
    increasePoints()
  }

  const restartGame = () => {
    randomizeNewSquare()
    resetPoints()
    resetTime()
  };

  return {randomizeNewSquare,randomizedSquare, restartGame, handleCorrectClick, points };
};
export default GameController;
