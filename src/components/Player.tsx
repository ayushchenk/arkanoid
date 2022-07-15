import { useKeyboardDirection } from "../hooks/useKeyboardDirection";
import { Brick } from "./Brick";
import config from "../config";
import { useAppSelector } from "../redux/Hooks";
import { useMouseDirection } from "../hooks/useMouseDirection";

export function Player() {
    const position = useAppSelector(state => state.player.position);

    useKeyboardDirection();
    // useMouseDirection();

    return (
        <Brick
            position={position}
            size={config.player.size}
            className="player"
        />
    );
}