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
            state.position.x = action.payload - config.player.size.width / 2;
        },
        updatePlayerVelocity: (state, action: PayloadAction<number>) => {
            state.velocity = action.payload;
        },
        updatePlayerLastX: (state, action: PayloadAction<number>) => {
            state.lastX = action.payload;
        }
    }
});

export const {
    movePlayer,
    setPlayerPosition,
    updatePlayerVelocity,
    updatePlayerLastX } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;