import config from "../../config";
import { Point } from "../../models/Point";
import { getNewBallPosition } from "../../util/Util";

export interface BallState {
    position: Point;
    xVelocity: number;
    yVelocity: number;
}

export const initialState: BallState = {
    position: getNewBallPosition(),
    xVelocity: config.ball.offset,
    yVelocity: config.ball.offset
}