import config from "../../config";
import { AppThunk } from "../../redux/Store";
import { updatePlayerLastX, updatePlayerVelocity } from "./PlayerSlice";

export function calculatePlayerVelocity(): AppThunk<void> {
    return (dispatch, getState) => {
        const lastX = getState().player.lastX;
        const currentX = getState().player.position.x;

        const newVelocity = (currentX - lastX) / config.player.velocityInterval;
        
        dispatch(updatePlayerVelocity(newVelocity));
        dispatch(updatePlayerLastX(currentX));
    }
}