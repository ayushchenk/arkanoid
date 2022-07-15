import config from "../../config";
import { Point } from "../../models/Point";
import { getRandomPoint } from "../../util/Util";

export interface BallState {
    position: Point;
    xVelocity: number;
    yVelocity: number;
}

export const initialState: BallState = {
    position: getRandomPoint(100, 200, 100, 200),
    xVelocity: config.ball.offset,
    yVelocity: config.ball.offset
}