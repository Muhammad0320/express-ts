import { NextFunction, Request, Response } from "express";
import { get } from "./decorators/route";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";

const useMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Let's see if you work ");
};

@controller("/auth")
export class LoginController {
  @get("/login")
  @use(useMiddleware)
  getLogin(req: Request, res: Response) {
    res.send(`
        
              <form method='POST' >
                  <div> 
                      <label> Email </label>
                      <input name='email' />
                  </div>  
                  <div>
                      <label> Password </label> 
                      <input name='password' type='password' />    
               </div>
      
               <button> submit form </button>
            </form>
          
        `);
  }
}
