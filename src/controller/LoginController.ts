import { NextFunction, Request, Response } from "express";
import { get, post } from "./decorators/route";
import { controller } from "./decorators/controller";
import { use } from "./decorators/use";
import { RequestWithBody } from "../routes/loginRoutes";
import { bodyValidator } from "./decorators/bodyValidator";

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
                      <input name='eml' />
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

  @post("/logout")
  PostLogout(req: Request, res: Response) {
    req.session = undefined;

    res.redirect("/login");
  }
}
