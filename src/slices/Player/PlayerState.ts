import config from "../../config";
import { Point } from "../../models/Point";

export interface PlayerState {
    position: Point;
    velocity: number;
    lastX: number;
    health: number;
}

export const initialState: PlayerState = {
    position: config.player.startingPosition,
    health: config.player.health,
    lastX: 0,
    velocity: 0
}