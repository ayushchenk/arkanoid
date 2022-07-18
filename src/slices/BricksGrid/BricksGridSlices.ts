import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "../../models/Point";
import { initialState } from "./BricksGridState";

const brickSlice = createSlice({
    name: "bricks",
    initialState,
    reducers: {
        removeBrick: (state, action: PayloadAction<Point>) => {
            const toRemove = state.bricks.findIndex(brick => brick.x === action.payload.x && brick.y === action.payload.y);
            if (toRemove !== -1) {
                state.bricks.splice(toRemove, 1);
            }
        }
    }
});

export const { removeBrick } = brickSlice.actions;
export const bricksGridReducer = brickSlice.reducer;