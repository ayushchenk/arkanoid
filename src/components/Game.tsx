import { Ball } from "./Ball";
import { BricksGrid } from "./BricksGrid";
import { Player } from "./Player";

export function Game() {
    return (
        <div className="game">
            <BricksGrid />
            <Ball />
            <Player />
        </div>
    );
}