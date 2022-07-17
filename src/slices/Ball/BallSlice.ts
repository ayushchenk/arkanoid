import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "../../models/Point";
import { getRandomPoint, isBallBelowAndOutsidePlayer, isBallInsidePlayer, isBallOutsideLeftBorder, isBallOutsideRightBorder, isBallOutsideUpperBorder } from "../../util/Util";
import { initialState } from "./BallState";

export const ballSlice = createSlice({
    name: "ball",
    initialState,
    reducers: {
        applyVelocity: (state) => {
            state.position.x += state.xVelocity;
            state.position.y += state.yVelocity;
        },
        checkBorders: (state, action: PayloadAction<Point>) => {
            const playerPosition = action.payload;

            if (isBallInsidePlayer(playerPosition, state.position) || isBallOutsideUpperBorder(state.position)) {
                state.yVelocity *= -1;
            }

            if (isBallOutsideRightBorder(state.position) || isBallOutsideLeftBorder(state.position)) {
                state.xVelocity *= -1;
            }

            if (isBallBelowAndOutsidePlayer(playerPosition, state.position)) {
                state.position = getRandomPoint(100, 200, 100, 200);
            }
        }
    }
});

export const { applyVelocity, checkBorders } = ballSlice.actions;
export const ballReducer = ballSlice.reducer;