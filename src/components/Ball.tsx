import { useEffect } from "react";
import config from "../config";
import { Brick } from "./Brick";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { moveBall } from "../slices/Ball/BallThunks";

export function Ball() {
    const ballPosition = useAppSelector(state => state.ball.position);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveBall());
        }, config.ball.interval);

        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <Brick
            className="ball"
            position={ballPosition}
            size={{ width: config.ball.radius, height: config.ball.radius }}
        />
    );
}