import { game } from "./index";


export function startLogger() {
    setInterval(() => {
        console.log(game);
    }, 4000)
}