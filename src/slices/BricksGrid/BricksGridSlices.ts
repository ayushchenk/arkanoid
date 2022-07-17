import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./BricksGridState";

const brickSlice = createSlice({
    name: "bricks",
    initialState,
    reducers: {

    }
});

export const { } = brickSlice.actions;
export const bricksGridReducer = brickSlice.reducer;