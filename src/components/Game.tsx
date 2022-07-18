import { useAppSelector } from "../redux/Store";
import { Ball } from "./Ball";
import { BricksGrid } from "./BricksGrid";
import { Player } from "./Player";

export function Game() {
    const velo = useAppSelector(state => state.player.velocity);
    return (
        <div className="game">
            <BricksGrid />
            <Ball />
            <Player />
            <label>{velo}</label>
        </div>
    );
}