import express,{Application,Request,Response} from 'express';
import Register from './register';

class Routes{
    private app:Application=express();

    constructor(){
      this.app = express();
      this.initiateRoutes();
    }

    private initiateRoutes():void{
        this.app.get("/", (req:Request,res:Response)=>{
            res.send("*****************************In routes fils********************************")
        })
        this.app.use("/register",new Register().getRoutes() )

    }

    public getApp():Application{
        return this.app;
    }

}

export default Routes;
