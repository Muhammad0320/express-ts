import { Request, Response } from "express";
import { get } from "./decorators/get";
import { controller } from "./decorators/controller";

@controller("/auth")
export class LoginController {
  @get("/login")
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
