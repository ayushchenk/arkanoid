import { Brick } from "./Brick";
import config from "../config";
import { useMouseDirection } from "../hooks/useMouseDirection";
import { useVelocityCalculation } from "../hooks/useVelocityCalculation";
import { useAppSelector } from "../redux/Store";

export function Player() {
    const playerPosition = useAppSelector(state => state.player.position);

    useMouseDirection();
    useVelocityCalculation();

    return (
        <Brick
            position={playerPosition}
            size={config.player.size}
            className="player" />
    );
}