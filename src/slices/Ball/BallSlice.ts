import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config";
import { Point } from "../../models/Point";
import { getRandomPoint } from "../../util/Util";
import { initialState } from "./BallState";

export const ballSlice = createSlice({
    name: "ball",
    initialState,
    reducers: {
        applyVelocity: (state) => {
            state.position.x += state.xVelocity;
            state.position.y += state.yVelocity;
        },
        checkLowerBound: (state, action: PayloadAction<Point>) => {
            if (state.position.y > action.payload.y &&
                (state.position.x < action.payload.x || state.position.x > action.payload.x + config.player.size.width)) {
                state.position = getRandomPoint(100, 200, 100, 200);
            }
        }
    }
});

export const { applyVelocity, checkLowerBound } = ballSlice.actions;
export const ballReducer = ballSlice.reducer;