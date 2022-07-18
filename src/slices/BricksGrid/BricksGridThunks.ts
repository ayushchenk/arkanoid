import { AppThunk } from "../../redux/Store";
import {
    isBallApproachingFromBottom,
    isBallApproachingFromTop,
    isBallApproachingFromLeft,
    isBallApproachingFromRight
} from "../../util/Util";
import { mirrorXVelocity, mirrorYVelocity } from "../Ball/BallSlice";
import { removeBrick } from "./BricksGridSlices";

export function checkBricks(): AppThunk<void> {
    return (dispatch, getState) => {
        const ballPosition = getState().ball.position;
        const bricks = getState().grid.bricks;

        for (const brick of bricks) {
            if (isBallApproachingFromBottom(ballPosition, brick)
                || isBallApproachingFromTop(ballPosition, brick)) {
                dispatch(mirrorYVelocity());
                dispatch(removeBrick(brick));
                return;
            }

            if (isBallApproachingFromLeft(ballPosition, brick)
                || isBallApproachingFromRight(ballPosition, brick)) {
                dispatch(mirrorXVelocity())
                dispatch(removeBrick(brick));
                return;
            }
        }
    }
}