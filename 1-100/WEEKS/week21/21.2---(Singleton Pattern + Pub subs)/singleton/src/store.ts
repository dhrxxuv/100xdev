interface Game{
    id: Number,
    blackplayer:string,
    whiteplayer:string,
    moves:string[]
}

/*
    for singleton pattern we make are constructor private
    and create a static attribute getInstance() and use -->(private static instance: GameManager)<--
    which will create instance if now created and return same instance if
    some tries to create new instance via -->GameManger.getInstance()<--
 */
export class GameManager{
    games: Game[] = []
    private static instance: GameManager
    private constructor(){
        this.games = []
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager()
        return GameManager.instance
    }
    addMove(gameId:Number, move:string){
        console.log(`GameId:${gameId} Move:${move}`)
        const game = this.games.find((game)=>{
            game.id===gameId
        })
        game?.moves.push(move)
    }

    addGame(gameId:Number){
        const game = {
            id: gameId,
            blackplayer:"Dhruv",
            whiteplayer:"Luv",
            moves:[]
        }
        this.games.push(game)
    }
}

export const game = GameManager.getInstance()
