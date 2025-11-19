interface Game{
    id: Number,
    blackplayer:string,
    whiteplayer:string,
    moves:string[]
}

export class gameManager{
    games: Game[] = []
    constructor(){
        this.games = []
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

export const game = new gameManager()