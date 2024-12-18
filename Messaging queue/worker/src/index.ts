import { createClient } from "redis";



const client=createClient();


async function main(){
    await client.connect();
    console.log("server running ")
    while(1){
        const response=await client.brPop("submission",0);
        console.log(response)
        //actually run the code and get the submission status
        await new Promise((resolve)=>setTimeout(resolve,100))

        //to do send the submission status to the pub sub
        console.log("Submission status")

    }
 
}

main()
