import { useEffect } from "react";
import config from "../config";
import { useAppDispatch } from "../redux/Store";
import { calculateVelocity } from "../slices/Player/PlayerSlice";

export function useVelocityCalculation() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(calculateVelocity());
        }, config.player.velocityInterval);

        return () => clearInterval(interval);
    }, [dispatch]);
}