import { game } from "./store";


export function startLogger() {
    setInterval(() => {
        console.log(game);
    }, 4000)
}