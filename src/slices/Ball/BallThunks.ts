import { AppThunk } from "../../redux/Store";
import { checkBricks } from "../BricksGrid/BricksGridThunks";
import { applyVelocity, checkBorders } from "./BallSlice";

export function moveBall(): AppThunk<void> {
    return (dispatch, getState) => {
        dispatch(applyVelocity());
        dispatch(checkBorders(getState().player));
        dispatch(checkBricks());
    }
}