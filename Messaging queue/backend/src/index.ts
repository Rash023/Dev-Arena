import express  from "express";
import { createClient } from "redis";


const app=express();

app.use(express.json())

const client=createClient();
client.connect();

//message queue of submissions 
app.post("/submit",async (req,res):Promise<any> =>{
    const {problemId,userID,code,language}=req.body;
    try{
        await client.lPush("submission",JSON.stringify({problemId,userID,code,language}));
        return res.status(200).json({
            message:"Submission Recieved"
        })
    }
    catch(error){
        return res.status(400).json({
            message:"Unable to submit! Try again later."
        })
    }
    
})

app.listen(4000,()=>{
    console.log("Server Running on PORT 4000")
})