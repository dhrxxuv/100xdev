import { gameManager } from "./store";
import { startLogger } from "./logger";
export const game = new gameManager()
startLogger();

setInterval(() => {
    game.addGame(Math.random())

}, 5000)
