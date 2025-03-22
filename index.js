import express from 'express';
import dotenv from 'dotenv';
import database from './Database/config.js'
import routers from './routers/router.js';


dotenv.config();

const app=express();

app.use(express.json());

database();

const port_env = process.env.PORT;

app.use("/api", routers)
app.get("/",(req, res)=>{
    res.status(200).send("API Is Working")
})


app.listen(port_env, ()=>{
 
    console.log(`server is running on port ${port_env}`);
})
