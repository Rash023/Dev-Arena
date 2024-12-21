import { GameManager } from "./store";


export function StartLogger() {
    setInterval(()=>{
        console.log(GameManager.getInstance()?.log())
    },5000)
    
}

