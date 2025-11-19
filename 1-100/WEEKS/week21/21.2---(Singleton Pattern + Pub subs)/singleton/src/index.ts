import { game } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    game.addGame(Math.random())

}, 5000)
