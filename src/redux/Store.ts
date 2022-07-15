import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { ballReducer } from '../slices/Ball/BallSlice';
import { playerReducer } from "../slices/PlayerSlice";

export const store = configureStore({
    reducer: {
        player: playerReducer,
        ball: ballReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, AnyAction>;
