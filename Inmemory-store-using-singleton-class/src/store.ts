interface Game{
    id:string;
    whitePlayerName:string;
    blackPlayerName:string;
    moves:string[]
}

//singleton class

export class GameManager{
    games:Game[]=[]
    private static instance:GameManager;
    private constructor(){
        this.games=[];
    }


    //creates a single instance of the GameManager class and serves all the users
    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        else{
            GameManager.instance=new GameManager();
        }
        

    }

    addMove(gameId:string,move:string){
        console.log(`Adding move ${move} to game ${gameId}`)
        const game=this.games.find(game=>game.id==gameId);
        game?.moves.push(move);
    }


    addGame(gameId:string){
        const game={
            id:gameId,
            whitePlayerName:'Magnus',
            blackPlayerName:'Pragg',
            moves:[]
        }
    }

    log(){
        console.log(this.games)
    }
}


export const gameManager=GameManager.getInstance();
