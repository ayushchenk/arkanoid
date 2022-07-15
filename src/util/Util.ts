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