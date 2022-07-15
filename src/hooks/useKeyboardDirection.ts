import { useEffect } from "react";
import { Direction } from "../models/Direction";
import { useAppDispatch } from "../redux/Hooks";
import { movePlayer } from "../slices/PlayerSlice";

export function useKeyboardDirection(): void {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const downHandler = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                dispatch(movePlayer(Direction.Left));
            }

            if (event.key === "ArrowRight") {
                dispatch(movePlayer(Direction.Right));
            }
        };

        document.addEventListener("keydown", downHandler);

        return () => document.removeEventListener("keydown", downHandler);
    }, [dispatch]);
}   