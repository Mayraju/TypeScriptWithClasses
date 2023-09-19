import mongoose from 'mongoose';


export default class Database{


    constructor(){
        this.connectDB();
      
    }

    private async connectDB(){
         await  mongoose.connect("mongodb://127.0.0.1:27017/typeScriptTestingDB").then(()=>{console.log("database connected")}).catch((err)=>{console.log("DB error",err)})
    }

    // public getDB(){
    //       return this.mongoose
    // }
}