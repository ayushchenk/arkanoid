import { AppThunk } from "../../redux/Store";
import { applyVelocity, checkBorders } from "./BallSlice";

export function moveBall(): AppThunk<void> {
    return (dispatch, getState) => {
        dispatch(applyVelocity());

        const playerPosition = getState().player.position;
        dispatch(checkBorders(playerPosition));
    }
}