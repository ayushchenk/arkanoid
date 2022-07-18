import { useAppSelector } from "../redux/Store";
import { ReactComponent as Heart } from "../static/heart.svg";

export function HealthBar() {
    const health = useAppSelector(state => state.player.health);

    const hearts = [...Array(health)].map((_, i) =>
        <Heart key={i} transform="scale(0.7)" color="red"></Heart>
    );

    return (
        <div>{hearts} </div>
    );
}