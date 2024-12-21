import { StartLogger } from "./logger";
import { GameManager} from "./store";


StartLogger();

setInterval(()=>{
    GameManager.getInstance()?.addGame(Math.random().toString())
},5000)