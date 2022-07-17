import { useEffect } from "react";
import { useAppDispatch } from "../redux/Store";
import { setPlayerPosition } from "../slices/Player/PlayerSlice";

export function useMouseDirection(): void {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mouseHandler = (event: MouseEvent) => {
            dispatch(setPlayerPosition(event.clientX));
        };

        document.addEventListener("mousemove", mouseHandler);

        return () => document.removeEventListener("mousemove", mouseHandler);
    }, [dispatch]);
}   