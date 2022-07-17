import { useEffect } from "react";
import config from "../config";
import { useAppDispatch } from "../redux/Store";
import { calculatePlayerVelocity } from "../slices/Player/PlayerThunk";

export function useVelocityCalculation() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(calculatePlayerVelocity());
        }, config.player.velocityInterval);

        return () => clearInterval(interval);
    }, [dispatch]);
}