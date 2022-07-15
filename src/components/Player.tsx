import { useKeyboardDirection } from "../hooks/useKeyboardDirection";
import { Brick } from "./Brick";
import config from "../config";
import { useAppSelector } from "../redux/Hooks";

export function Player() {
    const position = useAppSelector(state => state.player.position);

    useKeyboardDirection();

    return (
        <Brick
            position={position}
            size={config.player.size}
            className="player"
        />
    );
}