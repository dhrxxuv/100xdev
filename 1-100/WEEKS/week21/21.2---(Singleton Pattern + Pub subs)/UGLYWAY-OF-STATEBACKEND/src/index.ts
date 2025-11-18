import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id:Math.random(),
        "whiteplayer": "harkirat",
        "blackplayer": "jaskirat",
        moves: ["e4e5"]
    })
}, 5000)
