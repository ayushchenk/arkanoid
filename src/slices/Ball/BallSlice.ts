import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config";
import { Point } from "../../models/Point";
import {
    getNewBallPosition,
    isBallBelowAndOutsidePlayer,
    isBallInsidePlayer,
    isBallOutsideLeftBorder,
    isBallOutsideRightBorder,
    isBallOutsideUpperBorder
} from "../../util/Util";
import { initialState } from "./BallState";

export const ballSlice = createSlice({
    name: "ball",
    initialState,
    reducers: {
        applyVelocity: (state) => {
            state.position.x += state.xVelocity;
            state.position.y += state.yVelocity;
        },
        mirrorXVelocity: (state) => {
            state.xVelocity *= -1;
        },
        mirrorYVelocity: (state) => {
            state.yVelocity *= -1;
        },
        checkBorders: (state, action: PayloadAction<{ position: Point, velocity: number }>) => {
            const playerPosition = action.payload.position;
            const playerVelocity = action.payload.velocity;

            if (isBallInsidePlayer(playerPosition, state.position)) {
                state.yVelocity *= -1;
                state.xVelocity += playerVelocity;
            }

            if (isBallOutsideUpperBorder(state.position)) {
                state.yVelocity *= -1;
            }

            if (isBallOutsideRightBorder(state.position) || isBallOutsideLeftBorder(state.position)) {
                state.xVelocity *= -1;
            }

            if (isBallBelowAndOutsidePlayer(playerPosition, state.position)) {
                state.position = getNewBallPosition();
                state.xVelocity = config.ball.offset;
                state.yVelocity = config.ball.offset;
            }
        }
    }
});

export const { 
    applyVelocity, 
    checkBorders, 
    mirrorXVelocity, 
    mirrorYVelocity 
} = ballSlice.actions;
export const ballReducer = ballSlice.reducer;