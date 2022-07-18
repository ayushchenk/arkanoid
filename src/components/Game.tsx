import { useAppSelector } from "../redux/Store";
import { Ball } from "./Ball";
import { BricksGrid } from "./BricksGrid";
import { HealthBar } from "./HealthBar";
import { Player } from "./Player";

export function Game() {
    const velo = useAppSelector(state => state.player.velocity);
    return (
        <div className="game">
            <HealthBar />
            <BricksGrid />
            <Ball />
            <Player />
        </div>
    );
}