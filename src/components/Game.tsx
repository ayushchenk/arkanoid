import { Ball } from "./Ball";
import { Player } from "./Player";

export function Game() {
    return (
        <div className="game">
            <Ball />
            <Player />
        </div>
    );
}