import  express  from "express";
import {VALUE} from "@repo/common/config"
const app=express();


app.get("/",(req,res)=>{
    res.json({
        value:VALUE,
        message:"hello world",
})
})

app.listen(4000,()=>{
    `Server is running at PORT 4000`
})