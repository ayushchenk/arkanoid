import { useEffect } from "react";
import { useAppDispatch } from "../redux/Hooks";
import { setPlayerPosition } from "../slices/PlayerSlice";

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