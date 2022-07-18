import config from "../config";
import { Point } from "../models/Point";

const playerWidth = config.player.size.width;
const playerHeight = config.player.size.height;
const brickWidth = config.arena.brick.size.width;
const brickHeight = config.arena.brick.size.height;
const ballSize = config.ball.size;

export function getRandomInt(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

export function getRandomPoint(minX: number, maxX: number, minY: number, maxY: number): Point {
    return {
        x: getRandomInt(minX, maxX),
        y: getRandomInt(minY, maxY)
    }
}

export function getNewBallPosition(): Point {
    return {
        x: getRandomInt(100, config.arena.width - 100),
        y: getRandomInt(config.arena.rows * (config.arena.gap + brickHeight), config.player.startingPosition.y - 300)
    }
}

export function isBallBelowAndOutsidePlayer(player: Point, ball: Point): boolean {
    return ball.y > player.y + playerHeight
        && (ball.x < player.x || ball.x > player.x + playerWidth);
}

export function isBallInsidePlayer(player: Point, ball: Point): boolean {
    return ball.y >= player.y && ball.y <= player.y + playerHeight
        && ball.x >= player.x && ball.x <= player.x + playerWidth;
}

export function isBallOutsideRightBorder(ball: Point) {
    return ball.x + ballSize >= config.arena.width;
}

export function isBallOutsideLeftBorder(ball: Point) {
    return ball.x <= 0;
}

export function isBallOutsideUpperBorder(ball: Point) {
    return ball.y <= 0;
}

export function isBallApproachingFromBottom(ball: Point, brick: Point) {
    return ball.x >= brick.x && ball.x <= brick.x + brickWidth
        && ball.y > brick.y && ball.y <= brick.y + brickHeight;
}

export function isBallApproachingFromTop(ball: Point, brick: Point) {
    return ball.x >= brick.x && ball.x <= brick.x + brickWidth
        && ball.y < brick.y && ball.y + ballSize >= brick.y;
}

export function isBallApproachingFromLeft(ball: Point, brick: Point) {
    return ball.y >= brick.y && ball.y <= brick.y + brickHeight
        && ball.x < brick.x && ball.x + ballSize >= brick.x;
}

export function isBallApproachingFromRight(ball: Point, brick: Point) {
    return ball.y >= brick.y && ball.y <= brick.y + brickHeight
        && ball.x + ballSize > brick.x + brickWidth && ball.x <= brick.x + brickWidth;
}