import express, {Application,Request,Response} from 'express';
import RegisterStudentService from '../services/register';

export default class Register{

     private app: Application;
     constructor(){
        this.app = express();
        this.initializeRoutes();
     }

     private initializeRoutes(){

      this.app.get("/registerStudent", async function(req:Request,res:Response){
        try{
        let data =  await new RegisterStudentService().fcnRegisterStudent() ;
          console.log(data,"=========message===================");
        res.status(200).send(data);
        }
        catch(err){
            throw err;
        }
      })
      this.app.get("/printStudentDetails",async function(req:Request,res:Response){
         try{
            let data = await new RegisterStudentService().fcnprintStudentDetails();
             res.status(200).send(data);
         }
         catch(err){
            throw err;
         }
      })

     }
    public getRoutes():Application{
        return this.app
    }
}