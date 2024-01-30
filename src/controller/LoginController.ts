import { NextFunction, Request, Response } from "express";
import { get, post } from "./decorators/route";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";
import { bodyValidator } from "./decorators/bodyValidator";

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

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

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;

    if (email === "muhammmad@gmail.com" && password === "password") {
      req.session = { isLoggedIn: true };

      res.redirect("/");
    } else {
      res.send(`
  
        <div>  
            <div> Invalid login credentials try again </div>
        </div>
      
      `);
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;

    res.redirect("/auth/login");
  }
}
