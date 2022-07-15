import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../config";
import { Direction } from "../models/Direction";
import { Point } from "../models/Point";

export interface PlayerState {
    position: Point;
}

const initialState: PlayerState = {
    position: config.player.startingPosition
}

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
        }
    }
});

export const { movePlayer, setPlayerPosition } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;