import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config";
import { Direction } from "../../models/Direction";
import { initialState } from "./PlayerState";

export const playerSlice = createSlice({
    name: "player",
    initialState,
    reducers: {
        movePlayer: (state, action: PayloadAction<Direction>) => {
            if (action.payload === Direction.Left && state.position.x - config.player.offset > 0) {
                state.position.x -= config.player.offset;
            }

            if (action.payload === Direction.Right
                && state.position.x + config.player.size.width + config.player.offset < config.arena.width) {
                state.position.x += config.player.offset;
            }
        },
        setPlayerPosition: (state, action: PayloadAction<number>) => {
            const newX = action.payload;

            if (newX >= config.player.halfWidth() && newX <= config.arena.width - config.player.halfWidth()) {
                state.position.x = newX - config.player.halfWidth();
            }
        },
        calculateVelocity: (state) => {
            const newVelocity = (state.position.x - state.lastX) / config.player.velocityInterval;
            state.velocity = newVelocity;
            state.lastX = state.position.x;
        }
    }
});

export const {
    movePlayer,
    setPlayerPosition,
    calculateVelocity
} = playerSlice.actions;
export const playerReducer = playerSlice.reducer;