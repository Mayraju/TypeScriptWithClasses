import express,{Application} from "express";
import Server from "./src/index";
//import Database from "./src/db";

const app:Application = express();
//new Database();
const server:Server = new Server(app);
const PORT:number = process.env.PORT ?parseInt(process.env.PORT,10):8080;

app.listen(PORT,"localhost",function(){
    console.log("server is running");
})