import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  changeGameType,
  tick,
  updateHighScore,
  changeCoordinatesVisibility,
  resetGame
} from "./Redux/GameSlice";

const GameController = () => {
  const game = useSelector((state) => state.game);
  const gameType = game.gameType;
  const isRunning = game.isRunning;
  const isGameFinished = game.isGameFinished;
  const showCoordinates = game.showCoordinates;
  const highScore = game.highScore;
  const score = game.points;
  const dispatch = useDispatch();

  const updateGameType = (passedGameType) => {
    dispatch(changeGameType(passedGameType));
  };

  const [cookies, setCookie] = useCookies([
    "gameTypeCookie",
    "highScoresCookie",
    "showCoordinatesCookie",
  ]);
  const gameTypes = {
    endless: "endless",
    oneMinute: "oneMinute",
    threeMinutes: "threeMinutes",
    fiveMinutes: "fiveMinutes",
    practice: "practice",
  };

  useEffect(() => {
    if (cookies.gameTypeCookie === undefined) {
      setCookie("gameTypeCookie", gameTypes["practice"]);
      updateGameType("practice");
    } else {
      updateGameType(cookies.gameTypeCookie);
    }
    if (cookies.highScoresCookie === undefined) {
      setCookie("highScoresCookie", {
        oneMinute: 0,
        threeMinutes: 0,
        fiveMinutes: 0,
      });
    } if(gameType !== "practice" && gameType !== "endless"&&gameType)
    {
      if (highScore !== cookies.highScoresCookie[gameType]) {
        dispatch(updateHighScore(cookies.highScoresCookie[gameType]));
      }
    }

    if (cookies.showCoordinatesCookie === undefined) {
      setCookie("showCoordinatesCookie", showCoordinates);
    } else if (showCoordinates !== cookies.showCoordinatesCookie) {
      dispatch(changeCoordinatesVisibility());
    }
  }, []);

  useEffect(() => {
    setCookie("showCoordinatesCookie", showCoordinates);
  }, [showCoordinates]);

  useEffect(() => {
    
    if (score > cookies.highScoresCookie[gameType] &&gameType !== "practice" && gameType !== "endless"&&gameType) {
      setCookie("highScoresCookie", {...cookies.highScoresCookie, [gameType]: score});
      dispatch(updateHighScore(score));
    }
  }, [isGameFinished]);

  useEffect(() => {     
    if(gameType !== "practice" && gameType !== "endless"&&gameType)
    {
      if (highScore !== cookies.highScoresCookie[gameType]) {
        dispatch(updateHighScore(cookies.highScoresCookie[gameType]));
      }
    }
    setCookie("gameTypeCookie", gameType);
  }, [gameType]);

  useEffect(() => {
    const handleTabKey = (event) => {
      if ( !isGameFinished && event.key === "Tab") {
        event.preventDefault();
        dispatch(resetGame())
      }
    };

    window.addEventListener("keydown", handleTabKey);

    return () => {
      window.removeEventListener("keydown", handleTabKey);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
};
export default GameController;
