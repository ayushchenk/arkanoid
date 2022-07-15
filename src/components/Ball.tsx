import { useEffect } from "react";
import config from "../config";
import { Brick } from "./Brick";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { moveBall } from "../slices/Ball/BallThunks";

export function Ball() {
    const ballPosition = useAppSelector(state => state.ball.position);
    const playerPosition = useAppSelector(state => state.player.position);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveBall());
        }, 10);

        return () => clearInterval(interval);
    }, [dispatch, playerPosition]);

    return (
        <Brick
            className="ball"
            position={ballPosition}
            size={{ width: config.ball.radius, height: config.ball.radius }}
        />
    );
}