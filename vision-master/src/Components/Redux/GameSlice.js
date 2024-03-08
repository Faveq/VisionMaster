import { createSlice } from "@reduxjs/toolkit";

const gameTypes = {
  endless: "endless",
  oneMinute: "oneMinute",
  threeMinutes: "threeMinutes",
  fiveMinutes: "fiveMinutes",
  practice: "practice",
};

const initialState = {
  gameType: gameTypes["practice"],
  points: 0,
  highScore: 0,
  availableMistakes: 3,
  time: 0, // seconds
  isRunning: false,
  isGameFinished: false,
  randomizedSquare:
    String.fromCharCode(Math.floor(Math.random() * (104 - 97 + 1)) + 97) +
    +(Math.floor(Math.random() * 8) + 1),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeGameType: (state, action) => {
      gameSlice.caseReducers.resetGame(state);
      state.gameType = gameTypes[action.payload];
      switch (state.gameType) {
        case gameTypes.oneMinute:
          state.time = 3;
          break;
        case gameTypes.threeMinutes:
          state.time = 180;
          break;
        case gameTypes.fiveMinutes:
          state.time = 300;
          break;
        default:
          state.time = 0;
      }
    },

    addPoint: (state) => {
      state.points++;
    },
    updateHighScore: (state, action)=>{
      console.log("update")
      state.highScore = action.payload
    },
    startStop: (state) => {
      state.isRunning = !state.isRunning;
    },

    tick: (state) => {
      if (state.time > 0) {
        state.time--;
      }else{
        state.isGameFinished = true
        gameSlice.caseReducers.startStop(state);
      }
    },

    resetGame: (state) => {
      state.isGameFinished = false
      state.points = 0;
      state.availableMistakes = 3;
      state.time = 60;
      if (state.isRunning) {
        gameSlice.caseReducers.startStop(state);
      }
      gameSlice.caseReducers.randomizeNewSquare(state);
    },


    removeOneMistake: (state) => {
      state.availableMistakes--;
    },

    randomizeNewSquare: (state) => {
      state.randomizedSquare =
        String.fromCharCode(Math.floor(Math.random() * (104 - 97 + 1)) + 97) +
        +(Math.floor(Math.random() * 8) + 1);
    },

    handleClick: (state, action) => {
      state.isGameFinished = false
      if (!state.isRunning && state.gameType !== gameTypes.endless &&
        state.gameType !== gameTypes.practice) {
        gameSlice.caseReducers.startStop(state);
      }
      gameSlice.caseReducers.randomizeNewSquare(state);
      if (action.payload) {
        if (state.gameType !== gameTypes.practice) {
          gameSlice.caseReducers.addPoint(state);
        }
      } else if (
        state.gameType !== gameTypes.endless &&
        state.gameType !== gameTypes.practice
      ) {
        if (state.availableMistakes > 1) {
          gameSlice.caseReducers.removeOneMistake(state);
        } else {
          gameSlice.caseReducers.removeOneMistake(state);
          gameSlice.caseReducers.startStop(state);
          state.isGameFinished = true
        }
      }
    },
  },
});

export const {
  changeGameType,
  addPoint,
  resetGame,
  randomizeNewSquare,
  removeOneMistake,
  handleClick,
  tick,
  updateHighScore
} = gameSlice.actions;
export default gameSlice.reducer;
