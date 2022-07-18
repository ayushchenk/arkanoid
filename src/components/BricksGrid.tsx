import config from "../config";
import { useAppSelector } from "../redux/Store";
import { Brick } from "./Brick";

export function BricksGrid() {
    const brickPoints = useAppSelector(state => state.grid.bricks);
    
    const bricks = brickPoints.map((point, index) =>
        <Brick position={point} size={config.arena.brick.size} key={index} className="default" />
    );

    return (
        <div className="bricks-grid">
            {bricks}
        </div>
    );
}