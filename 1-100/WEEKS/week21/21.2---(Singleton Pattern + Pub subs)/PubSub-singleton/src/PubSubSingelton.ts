import { createClient, RedisClientType } from "redis"

export class PubSubManager{
    private static instance : PubSubManager;
    private redisClient:RedisClientType;
    private subscription:Map<string, string[]>

    private constructor(){
        this.redisClient = createClient()
        this.redisClient.connect()
        this.subscription = new Map()
    }

    public static getInstance(): PubSubManager {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }

    public userSubscribe(userId: string, stockTick:string){
        if(!this.subscription.has(stockTick)){
            this.subscription.set(stockTick,[])
        }
        this.subscription.get(stockTick)?.push(userId)
        if(this.subscription.get(stockTick)?.length===1){
            this.redisClient.subscribe(stockTick,(message)=>{
                this.handleMessage(stockTick,message)
            })
            console.log(`Subscribed to Redis channel: ${stockTick}`)
        }
    }
    public userUnSubscribe(userId:string,stockTick:string){
         this.subscription.set(stockTick, this.subscription.get(stockTick)?.filter((sub) => sub !== userId) || []);

        if (this.subscription.get(stockTick)?.length === 0) {
            this.redisClient.unsubscribe(stockTick);
            console.log(`UnSubscribed to Redis channel: ${stockTick}`);
        }
    }
    private handleMessage(stock: string, message: string) {
        console.log(`Message received on channel ${stock}: ${message}`);
        this.subscription.get(stock)?.forEach((sub) => {
            console.log(`Sending message to user: ${sub}`);
        });
    }

    public async disconnect() {
        await this.redisClient.quit();
    }
  
}