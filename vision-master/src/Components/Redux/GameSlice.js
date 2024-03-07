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
  availableMistakes: 3,
  randomizedSquare: String.fromCharCode(Math.floor(Math.random() * (104 - 97 + 1)) + 97) +
  +(Math.floor(Math.random() * 8) + 1),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeGameType: (state, action) => {
      state.gameType = gameTypes[action.payload];
      gameSlice.caseReducers.resetGame(state)
    },

    addPoint: (state) => {
      state.points++;
    },

    resetGame: (state) => {
      state.points = 0;
      state.availableMistakes = 3;
      gameSlice.caseReducers.randomizeNewSquare(state)
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
      if (action.payload) {
        gameSlice.caseReducers.randomizeNewSquare(state);
        gameSlice.caseReducers.addPoint(state);
      } else {
        if (state.availableMistakes > 1) {
          gameSlice.caseReducers.removeOneMistake(state);
        } else {
          gameSlice.caseReducers.randomizeNewSquare(state);
          gameSlice.caseReducers.resetGame(state);
          //resetTime();
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
} = gameSlice.actions;
export default gameSlice.reducer;
