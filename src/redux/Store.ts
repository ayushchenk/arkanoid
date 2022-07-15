import { configureStore } from '@reduxjs/toolkit';
import { ballReducer } from '../slices/BallSlice';
import { playerReducer } from "../slices/PlayerSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        ball: ballReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;