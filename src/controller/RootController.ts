import { NextFunction, Request, Response } from "express";
import { controller } from "./decorators/controller";
import { get } from "./decorators/route";
import { use } from "./decorators/use";

const AuthChecker = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.isLoggedIn) {
    return next();
  }

  res.send(`
      
    <div>
      <h1>
      Forbidden
      </h1>       
    </div>
  
    
    `);
};

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn) {
      res.send(`
  
        <div> 
              <p> You are logged in </p>
  
              <a href='/auth/logout' > Logout </a>
       </div>
      
      `);
    } else {
      res.send(`  
      <div> 
  
      <p> You are NOT logged in </p>
  
      <a href='/auth/login' > Login </a>
  
  </div>
  
  
      `);
    }
  }

  @get("/protected")
  @use(AuthChecker)
  getProtected(req: Request, res: Response) {
    res.send(`
  
    <div> 
  
    <p> You can access the protected route </p> 
      </div>
  
    `);
  }
}
