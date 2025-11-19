import { PubSubManager } from "./PubSubSingelton";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000)