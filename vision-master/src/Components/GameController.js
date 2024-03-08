import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addPoint, changeGameType, removeOneMistake, resetGame, tick, updateHighScore } from "./Redux/GameSlice";

const GameController = () => {
  const game = useSelector(state => state.game)
  const gameType = game.gameType
  const isRunning = game.isRunning
  const isGameFinished = game.isGameFinished
  const availableMistakes = game.availableMistakes
  const score = game.points
  const dispatch = useDispatch()
  

  const updateGameType = (passedGameType) =>{
    dispatch(changeGameType(passedGameType))
  }

  const [cookies, setCookie] = useCookies([
    "gameTypeCookie","highScoreCookie"
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
      updateGameType(cookies.gameTypeCookie);
    }
    if (cookies.highScoreCookie === undefined) {
      setCookie("highScoreCookie", 0)
    }
  }, []);

  useEffect(() => {
    if (score > cookies.highScoreCookie) {
      setCookie("highScoreCookie", score)
      dispatch(updateHighScore(score))
    }
  }, [isGameFinished]);

  useEffect(() => {
    setCookie("gameTypeCookie", gameType)
    
  }, [gameType]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick())
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
};
export default GameController;
