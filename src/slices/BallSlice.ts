import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import { Point } from "../models/Point";
import { getRandomPoint } from "../util/Util";

export interface BallState {
    position: Point;
    xVelocity: number;
    yVelocity: number;
}

const initialState: BallState = {
    position: getRandomPoint(100, 200, 100, 200),
    xVelocity: config.ball.offset,
    yVelocity: config.ball.offset
}

export const ballSlice = createSlice({
    name: "ball",
    initialState,
    reducers: {
        moveBall: (state, action: PayloadAction<Point>) => {
            state.position.x += state.xVelocity;
            state.position.y += state.yVelocity;

            if (state.position.y > action.payload.y &&
                (state.position.x < action.payload.x || state.position.x > action.payload.x + config.player.size.width)) {
                state.position = getRandomPoint(100, 200, 100, 200);
            }
        }
    }
});

export const { moveBall } = ballSlice.actions;
export const ballReducer = ballSlice.reducer;