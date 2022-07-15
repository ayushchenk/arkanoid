import config from "../config";
import { Point } from "../models/Point";

export function getRandomInt(min: number, max: number): number {
    return Math.random() * (max + min) - min;
}

export function getRandomPoint(minX: number, maxX: number, minY: number, maxY: number): Point {
    return {
        x: getRandomInt(minX, maxX),
        y: getRandomInt(minY, maxY)
    }
}

export function isBallBelowAndOutsidePlayer(playerPosition: Point, ballPosition: Point): boolean {
    return ballPosition.y > playerPosition.y + config.player.size.height
        && (ballPosition.x < playerPosition.x || ballPosition.x > playerPosition.x + config.player.size.width);
}

export function isBallInsidePlayer(playerPosition: Point, ballPosition: Point): boolean {
    return ballPosition.y >= playerPosition.y && ballPosition.y <= playerPosition.y + config.player.size.height
        && ballPosition.x >= playerPosition.x && ballPosition.x <= playerPosition.x + config.player.size.width;
}

export function isBallOutsideRightBorder(ballPosition: Point) {
    return ballPosition.x + config.ball.radius >= config.arena.width;
}

export function isBallOutsideLeftBorder(ballPosition: Point) {
    return ballPosition.x <= 0;
}

export function isBallOutsideUpperBorder(ballPosition: Point) {
    return ballPosition.y <= 0;
}