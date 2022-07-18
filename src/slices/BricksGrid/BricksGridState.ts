import config from "../../config";
import { Point } from "../../models/Point";

export interface BricksGridState {
    bricks: Point[];
}

const points: Point[] = [];
for (let row = 1; row <= config.arena.rows; row++) {
    for (let column = 1; column <= config.arena.columns(); column++) {
        points.push({
            x: column * (config.arena.gap + config.arena.brick.size.width),
            y: row * (config.arena.gap + config.arena.brick.size.height)
        });
    }
}

console.log(points);

export const initialState: BricksGridState = {
    bricks: points
}