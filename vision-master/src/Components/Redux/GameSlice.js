import { createSlice } from "@reduxjs/toolkit";

const gameTypes = {
    endless: "endless",
    oneMinute: "oneMinute",
    threeMinutes: "threeMinutes",
    fiveMinutes:  "fiveMinutes",
    practice: "practice"
}

const initialState = {
  gameType: gameTypes["practice"],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        ChangeGameType: (state,  action) => {
        state.gameType = gameTypes[action.payload]
        }
    }
})

export const {ChangeGameType}  = gameSlice.actions;
export default gameSlice.reducer