import { CSSProperties } from "react";
import { Point } from "../models/Point";
import { Size } from "../models/Size";

export interface BrickProps {
    position: Point;
    size: Size;
    className: string;
}

export function Brick(props: BrickProps) {
    const styles: CSSProperties = {
        top: props.position.y,
        left: props.position.x,
        width: props.size.width,
        height: props.size.height
    };

    return (
        <div className={`brick ${props.className}`} style={styles} />
    );
}